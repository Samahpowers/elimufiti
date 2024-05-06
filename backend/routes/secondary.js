import express from "express"
import upload from "../controllers/middlewares/upload.js"
import { createSecScheme, deleteSecondarySchemeByID, getSecondarySchemeFileByID, getSecondarySchemes } from "../controllers/secondary.js"

const secRouter = express()


secRouter.post("/create/schemes",upload.single("file"), createSecScheme)
secRouter.get('/schemes', getSecondarySchemes)
secRouter.get("/schemes/file/:id", getSecondarySchemeFileByID)
secRouter.delete('/delete/schemes/:id', deleteSecondarySchemeByID)
export { secRouter }