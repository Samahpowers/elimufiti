import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth.js";
import { prePriRouter } from "./routes/pre_primary.js";
import { priRouter } from "./routes/primary.js";
import { jssRouter } from "./routes/jss.js";
import { secRouter } from "./routes/secondary.js";

const PORT = 8000;
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
app.use("/api", authRouter);
app.use("/pre/primary", prePriRouter);
app.use("/primary", priRouter);
app.use("/jss", jssRouter);
app.use("/secondary", secRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
