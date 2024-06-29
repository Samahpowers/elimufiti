import { pool } from "../db.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let subscribedUserId = ""; // Initialize subscribedUserId

export const stkPush = async (req, res) => {
    const shortCode = process.env.SHORT_CODE;
    const passkey = process.env.PASSKEY;
    const callbackUrl = process.env.CALLBACK_URL;
    const token = req.token;

    try {
        if (req.body.userId) {
            subscribedUserId = req.body.userId; // Update subscribedUserId with the value from req.body.userId
        }

        const phone = req.body.phone.substring(1); // Remove the leading 0
        const amount = req.body.amount;

        const date = new Date();
        const timestamp = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;

        const password = Buffer.from(`${shortCode}${passkey}${timestamp}`).toString("base64");

        const response = await axios.post(
            "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
            {
                BusinessShortCode: shortCode, 
                Password: password,
                Timestamp: timestamp,
                TransactionType: "CustomerBuyGoodsOnline",
                Amount: amount,
                PartyA: `254${phone}`,
                PartyB: shortCode,
                PhoneNumber: `254${phone}`,
                CallBackURL: callbackUrl,
                AccountReference: `254${phone}`,
                TransactionDesc: "Test"
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error in STK Push request:', error);
        res.status(500).json({ error: error.message, details: error.response ? error.response.data : {} });
    }
};

export const callBack = async (req, res) => {
    try {
        console.log('Received callback data:', JSON.stringify(req.body, null, 2));

        const callbackData = req.body;

        if (!callbackData.Body || !callbackData.Body.stkCallback) {
            console.error('Invalid callback structure:', JSON.stringify(callbackData));
            return res.status(400).json({ error: "Invalid callback structure" });
        }

        const {
            Body: {
                stkCallback: {
                    MerchantRequestID,
                    CheckoutRequestID,
                    ResultCode,
                    ResultDesc,
                    CallbackMetadata
                }
            }
        } = callbackData;

        if (!MerchantRequestID || !CheckoutRequestID || ResultCode === undefined) {
            console.error('Missing required fields:', { MerchantRequestID, CheckoutRequestID, ResultCode });
            return res.status(400).json({ error: "Missing required callback fields" });
        }

        if (ResultCode === 0) {
            const amount = CallbackMetadata.Item.find(item => item.Name === 'Amount')?.Value;
            const mpesaReceiptNumber = CallbackMetadata.Item.find(item => item.Name === 'MpesaReceiptNumber')?.Value;
            const transactionDate = CallbackMetadata.Item.find(item => item.Name === 'TransactionDate')?.Value;
            const phoneNumber = CallbackMetadata.Item.find(item => item.Name === 'PhoneNumber')?.Value;

            const userId = subscribedUserId;

            if (amount) {
                try {
                    await updateUser(userId, { amount, isSubscribed: true }); // You may also include phoneNumber and mpesaReceiptNumber
                } catch (error) {
                    console.error('Error updating user in database:', error);
                    return res.status(500).json({ error: "Database update error" });
                }
            }
        } else {
            console.log('Transaction Failed:', ResultDesc);
        }

        return res.status(200).json({ message: "Callback received successfully" });
    } catch (error) {
        console.error('Error handling MPESA callback:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const updateUser = async (userId, updateFields) => {
    try {
        const setClause = Object.keys(updateFields).map(field => `${field} = ?`).join(', ');
        const values = Object.values(updateFields);
        const updateUserSql = `UPDATE signup SET ${setClause} WHERE id = ?`;
        values.push(userId);

        console.log('Executing SQL:', updateUserSql, 'with values:', values);

        const [result] = await pool.query(updateUserSql, values);
        console.log('Database update result:', result);
    } catch (error) {
        console.error('Error executing SQL query:', error);
        throw error;
    }
};
