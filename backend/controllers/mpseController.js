import pool from "../db.js";
import axios from "axios";

let subscribedUserId = ""; // Initialize subscribedUserId

export const stkPush = async (req, res) => {
    try {
        if (req.body.userId) {
            subscribedUserId = req.body.userId; // Update subscribedUserId with the value from req.body.userId
        }

      
        const phone = req.body.phone.substring(1); // Remove the leading 0
        const amount = req.body.amount;
        const Shortcode = "174379";
        const Passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";

        const date = new Date();
        const timestamp = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;

        const password = Buffer.from(`${Shortcode}${Passkey}${timestamp}`).toString("base64");

        const token = req.token;

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
                "CallBackURL": "https://ca0e-154-159-237-216.ngrok-free.app/api/mpesa/callback",
                "AccountReference": `254${phone}`,
                "TransactionDesc": "Test"
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
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
                    await updateUser(userId, { amount, isSubscribed: true });//later to include other fields like phoneNumber and mpesaReceiptNumber
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
