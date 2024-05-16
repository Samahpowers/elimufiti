import express from "express"
import { getUsers, login, logout, signup, stkPush } from "../controllers/auth.js";
import authenticateUser from "../middlewares/authenticateUser.js";
import generateToken from "../middlewares/generateToken.js";

const authRouter = express.Router()
 authRouter.post("/signup", signup);
 authRouter.post("/login",login)
 
 authRouter.post("/logout", authenticateUser, logout);

authRouter.post("/stk",generateToken, stkPush)


export {authRouter}