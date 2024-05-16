import jwt from"jsonwebtoken";

const authenticateUser = (req, res, next) => {
    // Extract the JWT token from the request headers
    const token = req.headers.authorization;

    // Check if the token is present
    if (!token) {
        return res.status(401).json({ errorMessage: 'Authorization token not provided' });
    }

    try {
        // Verify the JWT token and extract the user's ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Assuming you have a secret key stored in an environment variable
        req.user = {
            id: decoded.userId // Assuming the JWT payload contains the user ID
        };
        next();
    } catch (error) {
        // Handle token verification errors
        console.error('JWT verification error:', error);
        return res.status(401).json({ errorMessage: 'Invalid token' });
    }
};

export default authenticateUser;
