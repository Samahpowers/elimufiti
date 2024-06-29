import {pool} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
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

        const { email, password, name, isAdmin, isSubscribed, amount, expiresIn, phone } = req.body;
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
        const insertUserSql = "INSERT INTO signup (email, password, name, isAdmin,isSubscribed, amount, expiresIn, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        await pool.query(insertUserSql, [email, hashedPassword, name, isAdmin,isSubscribed, amount, expiresIn, phone]);

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

// Update a user
export const updateUser = async (req, res) => {
    try {
        console.log("Received update request:", req.body); // Log received request data

        const userId = req.params.id; // Get user ID from the URL parameter
        const { email, password, name, isAdmin, isSubscribed, amount, expiresIn, phone } = req.body;

        // Validate required fields
        if (!userId) {
            return res.status(400).json({ errorMessage: "User ID is required" });
        }

        // Check if the user exists
        const checkUserSql = "SELECT * FROM signup WHERE id = ?";
        const [checkUserData] = await pool.query(checkUserSql, [userId]);

        // If user with the provided ID does not exist, return an error
        if (checkUserData.length === 0) {
            return res.status(404).json({ errorMessage: "User not found" });
        }

        // Prepare fields to update
        const updateFields = {};
        if (email) updateFields.email = email;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
            updateFields.password = hashedPassword;
        }
        if (name) updateFields.name = name;
        if (isAdmin !== undefined) updateFields.isAdmin = isAdmin;
        if (isSubscribed !== undefined) updateFields.isSubscribed = isSubscribed;
        if (amount !== undefined) updateFields.amount = amount;
        if (expiresIn) updateFields.expiresIn = expiresIn;
        if (phone) updateFields.phone = phone;

        // Build the SQL update query dynamically based on provided fields
        const setClause = Object.keys(updateFields).map(field => `${field} = ?`).join(', ');
        const values = Object.values(updateFields);
        const updateUserSql = `UPDATE signup SET ${setClause} WHERE id = ?`;
        values.push(userId);

        // Execute the update query
        await pool.query(updateUserSql, values);

        // Return success response
        return res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        // Catch the actual error
        console.error("Internal Server Error:", error);

        // Return a generic error message for other types of errors
        return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const getUserSql = "SELECT * FROM signup WHERE email = ?";
        const [userData] = await pool.query(getUserSql, [email]);

        if (userData.length === 0) {
            return res.status(404).json({ errorMessage: "User not found" });
        }

        const userId = userData[0].id; //check
        const isSubscribed = userData[0].isSubscribed;//check

        const hashedPassword = userData[0].password;//check
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if (!passwordMatch) {
            return res.status(401).json({ errorMessage: "Invalid password" });
        }

        const token = jwt.sign({ userId, isSubscribed }, secretKey, { expiresIn: "1d" });

        await setUserToken(token);
        console.log("Generated Token:", token);
        return res.status(200).json({ message: "Login successful", token, userId });
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



export const protectedEndpoint = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ errorMessage: 'Access denied. No token provided.' });
    }
    
    const token = authHeader.split(' ')[1]; // Get the token from the header
    if (!token) {
        return res.status(401).json({ errorMessage: 'Access denied. No token provided.' });
    }
    
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        req.isSubscribed = decoded.isSubscribed;  // Attach isSubscribed to the request
        
        if (!req.isSubscribed) {
            return res.status(403).json({ errorMessage: 'Access denied. User is not subscribed.' });
        }
        
        next(); // Proceed to the next middleware or route handler
    } catch (ex) {
        res.status(400).json({ errorMessage: 'Invalid token.' });
    }
};


export const getUsers = async (req, res) => {
    try {
        // Fetch all data from the signup table
        const sql = "SELECT id, email, name, isAdmin, isSubscribed, amount, expiresIn, phone FROM signup";
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
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params; // Get the ID from the request parameters
        const sql = "SELECT * FROM signup WHERE id = ?";
        const [results] = await pool.query(sql, [id]); // Pass the ID as a parameter to the query
        
        if (results.length === 0) {
            return res.status(404).json({ error: "No User with this ID exists." });
        }
        
        return res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching the user in the database:", error);
        return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
};