import express from "express"
import upload from "../middlewares/upload.js"
import { /*createScheme, */
    getPriPrimarySchemes, 
    deletePriPrimarySchemeByID, 
    updatePriPrimarySchemeByID,
    getPriPrimarySchemeFileByID,   
    getPlayGroupExams,
    getPlayGroupExamByID,
    updatePlayGroupExamByID,
    deletePlayGroupExamByID,
    getPlayGroupExamsByYear,    
    getPP1Exams,
    getPPE1ExamsByYear,
    deletePP1ExamByID,
    getPP1ExamByID,
    getPP2Exams,
    getPPE2ExamsByYear,
    getPP2ExamByID,
    deletePP2ExamByID,    
    getPriPrimaryHolidayAssignments,    
    getPrePrimaryRevisionFileByID,   
    getPrePrimarySchemesByYear,
    getPriPrimaryCurriculumDesign,
    getPriPrimaryCurriculumDesignByYear,
    getPriPrimaryHolidayAssignmentsByYear,
    getPrePriPrimaryHolidayAssignmentFileByID,
    deletePriPrimaryHolidayAssignmentsByID,
    getPriPrimaryCurriculumDesignFileByID
   
} from "../controllers/pre_primary.js"
import { protectedEndpoint } from "../controllers/auth.js"
import {createResourceHandler} from "../controllers/resource.js"


const prePriRouter = express.Router()
//POST
prePriRouter.post("/create/schemes", upload.single("file"),/* createScheme*/createResourceHandler)
prePriRouter.post("/create/curriculum/designs", upload.single("file"),/* createScheme*/createResourceHandler)
prePriRouter.post("/create/play/group/exam", upload.single("file"), /*createPlayGroupExam*/createResourceHandler)
prePriRouter.post("/create/pp1/exam", upload.single("file"), createResourceHandler)
prePriRouter.post("/create/pp2/exam", upload.single("file"), createResourceHandler)
prePriRouter.post("/create/holiday/assignments",upload.single("file"), createResourceHandler)
    //http:/primary/create/play/group/exam
//GET ALL
prePriRouter.get("/schemes", getPriPrimarySchemes)
prePriRouter.get("/play/group/exams", getPlayGroupExams)
prePriRouter.get("/pp1/exams", getPP1Exams)
prePriRouter.get("/pp2/exams", getPP2Exams)
prePriRouter.get("/holiday/assignments", getPriPrimaryHolidayAssignments)
prePriRouter.get("/curriculum/designs", getPriPrimaryCurriculumDesign)

prePriRouter.get("/play/group/exams/:year", getPlayGroupExamsByYear)
prePriRouter.get("/schemes/:year", getPrePrimarySchemesByYear)
prePriRouter.get("/PP1/exams/:year", getPPE1ExamsByYear)
prePriRouter.get("/PP2/exams/:year", getPPE2ExamsByYear)
prePriRouter.get("/holiday/assignments/:year", getPriPrimaryHolidayAssignmentsByYear)
prePriRouter.get("/curriculum/designs/:year", getPriPrimaryCurriculumDesignByYear)
///pre/primary/play/group/exams

//GET FILE BY ID/download
prePriRouter.get("/scheme/file/:id", protectedEndpoint, getPriPrimarySchemeFileByID)
prePriRouter.get("/play/group/exam/file/:id", protectedEndpoint, getPlayGroupExamByID)
prePriRouter.get("/pp1/exam/file/:id", protectedEndpoint, getPP1ExamByID)
prePriRouter.get("/pp2/exam/file/:id", protectedEndpoint, getPP2ExamByID)
prePriRouter.get("/pre/primary/holiday/revision/file/:id", protectedEndpoint, getPrePrimaryRevisionFileByID)
prePriRouter.get("/holiday/assignment/file/:id", protectedEndpoint, getPrePriPrimaryHolidayAssignmentFileByID)
prePriRouter.get("/curriculum/design/file/:id", protectedEndpoint, getPriPrimaryCurriculumDesignFileByID)

//UPDATE BY ID
prePriRouter.put("/update/schemes/:id",updatePriPrimarySchemeByID)
prePriRouter.put("/update/play/group/exam/:id",updatePlayGroupExamByID)
prePriRouter.put("/update/play/group/exam/:id",updatePlayGroupExamByID)

// DELETE BY ID
prePriRouter.delete('/delete/play/group/exam/:id', deletePlayGroupExamByID)
prePriRouter.delete('/delete/schemes/:id', deletePriPrimarySchemeByID)
prePriRouter.delete('/delete/pp1/exam/:id', deletePP1ExamByID)
prePriRouter.delete('/delete/pp2/exam/:id', deletePP2ExamByID)
prePriRouter.delete('/holiday/assignments/:year', deletePriPrimaryHolidayAssignmentsByID)

export {prePriRouter}