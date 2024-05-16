import express from "express"


import upload from "../middlewares/upload.js";
import { createScheme, deletePrimarySchemeByID, getPrimarySchemeFileByID, getPrimarySchemes } from "../controllers/primary.js";


const priRouter = express.Router()

 priRouter.post("/create/schemes", upload.single("file"), createScheme) 
 priRouter.get('/schemes', getPrimarySchemes)
 priRouter.get("/schemes/file/:id", getPrimarySchemeFileByID)
 priRouter.delete('/delete/schemes/:id', deletePrimarySchemeByID)
 




export {priRouter}