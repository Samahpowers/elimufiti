import pool from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import axios from "axios"
import { setUserToken, removeUserToken, getUserToken } from "./userTokenManager.js";

// Define the generateSecretKey function
const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex'); // Generates a 64-character hexadecimal string (32 bytes)
};

// Generate a random secret key when the server starts
const secretKey = generateSecretKey();

export const signup = async (req, res) => {
    try {
        console.log("Received signup request:", req.body); // Log received request data

        const { email, password, name, isAdmin, isSubscribed, subscribedAmount, expiresIn } = req.body;
        if (!(email && password && name)) {
            return res.status(400).json({ errorMessage: "All fields are required" });
        }

        // Check if the user already exists
        const checkUserSql = "SELECT * FROM signup WHERE email = ?";
        const [checkUserData] = await pool.query(checkUserSql, [email]);

        // If user with the provided email already exists, return an error
        if (checkUserData.length > 0) {
            return res.status(400).json({ errorMessage: "User with this email already exists" });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

        // If user doesn't exist, proceed with signup
        const insertUserSql = "INSERT INTO signup (email, password, name, isAdmin,isSubscribed, subscribedAmount, expiresIn) VALUES (?, ?, ?, ?, ?, ?, ?)";
        await pool.query(insertUserSql, [email, hashedPassword, name, isAdmin,isSubscribed, subscribedAmount, expiresIn]);

        // Return success response
        return res.status(201).json({ message: "User created successfully", email, name });
    } catch (error) {
        // Catch the actual error
        console.error("Internal Server Error:", error);

        // Handle specific error types if needed
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ errorMessage: "User with this email already exists" });
        }

        // Return a generic error message for other types of errors
        return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Fetch user by email
        const getUserSql = "SELECT * FROM signup WHERE email = ?";
        const [userData] = await pool.query(getUserSql, [email]);

        // Check if user exists
        if (userData.length === 0) {
            return res.status(404).json({ errorMessage: "User not found" });
        }

        // Compare password asynchronously
        const hashedPassword = userData[0].password;
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if (!passwordMatch) {
            return res.status(401).json({ errorMessage: "Invalid password" });
        }

        // Password is correct, generate JWT token
        const userId = userData[0].id;
        const token = jwt.sign({ userId }, secretKey, { expiresIn: "1h" });

        // Store the token asynchronously
        await setUserToken(userId, token);

        // Return success response with JWT token
        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
};

export const logout = async (req, res) => {
    try {
        // Assuming authenticateUser middleware sets req.user with the user's ID
        const userId = req.user.id;

        // Remove the token associated with the user ID
        removeUserToken(userId);

        // Return success response
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
};


export const someProtectedEndpoint = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have middleware that extracts the user ID from the request

        // Check if the user has a valid token
        const userToken = getUserToken(userId);

        if (!userToken) {
            return res.status(401).json({ errorMessage: "Unauthorized. Please log in." });
        }

        // Proceed with accessing the protected resource
        // Your logic here...

        return res.status(200).json({ message: "Access granted" });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
};

export const getUsers = async (req, res) => {
    try {
        // Fetch all data from the signup table
        const sql = "SELECT id, email, name FROM signup";
        const [result] = await pool.query(sql);

        // Check if any data was fetched
        if (result.length === 0) {
            return res.status(404).json({ error: "No resources found in signup." });
        }

        // Send success response with fetched data
        return res.status(200).json(result);
    } catch (error) {
        // Handle database error
        console.error("Error fetching resources from signup in database:", error);
        return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
};

//MPESA STK PUSH

export const stkPush = async (req, res) => {
  try {
    const phone = req.body.phone.substring(1); // Remove the leading 0
    const amount = req.body.amount;
    const Shortcode = "174379";
    const Passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
    
    const date = new Date(); // Create a new Date object representing the current date and time
    const timestamp = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;
    console.log(timestamp); // Output the generated timestamp

    const password = Buffer.from(`${Shortcode}${Passkey}${timestamp}`).toString("base64");

    const token = req.token; // Retrieve the token from the req object

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {    
        "BusinessShortCode": Shortcode,    
        "Password": password,    
        "Timestamp": timestamp,    
        "TransactionType": "CustomerPayBillOnline",    
        "Amount": amount,    
        "PartyA": `254${phone}`,    
        "PartyB": Shortcode,    
        "PhoneNumber": `254${phone}`,    
        "CallBackURL": "https://mydomain.com/pat",    
        "AccountReference": `254${phone}`, // Account number or phone number    
        "TransactionDesc": "Test"
      },
      {
        headers: {
          Authorization: `Bearer ${token}` // Ensure there is a space after Bearer
        }
      }
    );

    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message, details: error.response ? error.response.data : {} });
  }
};

export default stkPush;
