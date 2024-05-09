import express, { Router } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { authRouter } from "./routes/auth.js";
import { prePriRouter } from "./routes/pre_primary.js";
import { priRouter } from "./routes/primary.js";
import { jssRouter } from "./routes/jss.js";
import { secRouter } from "./routes/secondary.js";


const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));
app.use(cookieParser());


app.use("/api" , authRouter)
app.use("/pre/primary",prePriRouter)
app.use("/primary", priRouter)
app.use("/jss", jssRouter)
app.use("/secondary",secRouter)

app.listen(PORT, ()=>{
    console.log(`Sever running on ${PORT}`);
})