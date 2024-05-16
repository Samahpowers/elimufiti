import express from "express"
import upload from "../middlewares/upload.js"
import { createScheme, 
    getPriPrimarySchemes, 
    deletePriPrimarySchemeByID, 
    updatePriPrimarySchemeByID,
    getPriPrimarySchemeFileByID
} from "../controllers/pre_primary.js"



const prePriRouter = express.Router()
//POST
prePriRouter.post("/create/schemes", upload.single("file"), createScheme)

//GET ALL
prePriRouter.get("/schemes", getPriPrimarySchemes)
//GET FILE BY ID
prePriRouter.get("/schemes/file/:id", getPriPrimarySchemeFileByID)
//UPDATE BY ID
prePriRouter.put("/update/schemes/:id",updatePriPrimarySchemeByID)

// DELETE BY ID
prePriRouter.delete('/delete/schemes/:id', deletePriPrimarySchemeByID)
export {prePriRouter}