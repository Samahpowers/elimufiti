import axios from "axios";

export const generateToken = async (req, res, next) => {
  try {
    const secretKey = "8LoFVVaMyb7yyGSd0gBPzWhGRWwGt0Jxmi4vZten5h9EoKxWStY6LgvQZK7q0SyZ";
    const consumerKey = "sMYOSfhaUI7cCXnd5tmV9wBAHevVjTY0YSPhLDdaAnYpF29e";
    const auth = Buffer.from(`${consumerKey}:${secretKey}`).toString("base64");

    const response = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      headers: {
        "Authorization": `Basic ${auth}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    req.token = response.data.access_token;  // Store the token in the req object
    next();
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(400).json({
      error: error.message,
      details: error.response ? error.response.data : {}
    });
  }
};

export default generateToken;
