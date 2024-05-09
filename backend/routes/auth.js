import express from "express"
import { signup } from "../controllers/auth.js";

const authRouter =express.Router()
 authRouter.post("/signup", signup);





export {authRouter}