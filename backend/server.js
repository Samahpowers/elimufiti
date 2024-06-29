import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { authRouter } from "./routes/auth.js";
import { prePriRouter } from "./routes/pre_primary.js";
import { priRouter } from "./routes/primary.js";
import { jssRouter } from "./routes/jss.js";
import { secRouter } from "./routes/secondary.js";
import { mpesaRouter } from "./routes/mpesaRoute.js";
import { userDataRoute } from "./routes/userDataRoute.js";
import dotenv from "dotenv"
// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT ||8001;
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies
app.use(cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["POST", "GET", "PUT", "DELETE"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
    credentials: true // Allow credentials (cookies) to be sent with requests
}));

// Routes
app.use("/api", authRouter); // check and change
app.use("/pre/primary", prePriRouter);
app.use("/primary", priRouter);
app.use("/jss", jssRouter);
app.use("/secondary", secRouter);
app.use("/api/mpesa", mpesaRouter); // Use the mpesa router for callback
app.use("/user/data", userDataRoute)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
