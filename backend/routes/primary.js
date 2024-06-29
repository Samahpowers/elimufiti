import express from "express"


import upload from "../middlewares/upload.js";
import {  
    getGrade1Exams,     
    getGrade2Exams, 
    getGrade3Exams, 
    getGrade4Exams, 
    getGrade5Exams, 
    getGrade6Exams, 
    getGrade1ExamsByYear, 
    getGrade2ExamsByYear, 
    getGrade3ExamsByYear, 
    getGrade4ExamsByYear, 
    getGrade5ExamsByYear, 
    getGrade6ExamsByYear,    
    getPrimarySchemes, 
    getPrimarySchemesByYear, 
    getPrimaryCurriculumDesign,
    getPrimaryCurriculumDesignByYear,
    getPrimaryAssessmentTools,
    getPrimaryAssessmentToolsByYear,
    getPrimaryRevisionNotes,
    getPrimaryHolidayAssignments,
    getPrimaryHolidayAssignmentsByYear,
    getPrimaryRevisionNotesByYear,
    getPrimaryRevisionNotesFileByID,
    getPrimaryHolidayAssignmentsFileByID,
    getPrimaryAssessmentToolsFileByID,
    getPrimaryCurriculumDesignFileByID,
    getGrade1ExamsFileByID,
    getGrade2ExamsFileByID,
    getGrade3ExamsFileByID,
    getGrade4ExamsFileByID,
    getGrade5ExamsFileByID,
    getGrade6ExamsFileByID,    
    deletePrimaryRevisionNotesByID,
    deletePrimaryHolidayAssignmentsByID,
    deletePrimaryAssessmentToolsByID,
    deletePrimaryCurriculumDesignByID,
    deleteGrade1ExamsByID,
    deleteGrade2ExamsByID,
    deleteGrade3ExamsByID,
    deleteGrade4ExamsByID,
    deleteGrade5ExamsByID,
    deleteGrade6ExamsByID,    
    getPrimarySchemesFileByID,
    deletePrimarySchemesByID,
    updatePrimarySchemeByID,   
    updatePrimaryAssessmentToolsByID,
    updatePrimaryCurriculumDesignByID,
    updateGrade1ExamsByID,
    updateGrade2ExamsByID,
    updateGrade3ExamsByID,
    updateGrade4ExamsByID,
    updateGrade5ExamsByID,
    updateGrade6ExamsByID,
    updatePrimaryRevisionNotesByID,
    updatePrimaryHolidayAssignmentsByID} from "../controllers/primary.js";
import { protectedEndpoint } from "../controllers/auth.js";
import { createResourceHandler, } from "../controllers/resource.js";


const priRouter = express.Router()

 priRouter.post("/create/schemes", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/curriculum/designs", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/assessment/tools", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/notes", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/grade1/exam", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/grade2/exam", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/grade3/exam", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/grade4/exam", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/grade5/exam", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/grade6/exam", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/revision/notes", upload.single("file"), createResourceHandler) 
 priRouter.post("/create/holiday/assignments",upload.single("file"), createResourceHandler)
//get all
 priRouter.get('/schemes', getPrimarySchemes)
 priRouter.get('/revision/notes', getPrimaryRevisionNotes)
 priRouter.get('/assessment/tools', getPrimaryAssessmentTools)
 priRouter.get('/holiday/assignments', getPrimaryHolidayAssignments)
 priRouter.get('/curriculum/designs', getPrimaryCurriculumDesign)
 priRouter.get('/grade1/examinations', getGrade1Exams)
 priRouter.get('/grade2/examinations', getGrade2Exams)
 priRouter.get('/grade3/examinations', getGrade3Exams)
 priRouter.get('/grade4/examinations', getGrade4Exams)
 priRouter.get('/grade5/examinations', getGrade5Exams)
 priRouter.get('/grade6/examinations', getGrade6Exams)

 //get per year

 priRouter.get("/schemes/:year", getPrimarySchemesByYear);
 priRouter.get("/revision/notes/:year", getPrimaryRevisionNotesByYear);
 priRouter.get("/holiday/revision/:year", getPrimaryHolidayAssignmentsByYear);
 priRouter.get("/assessment/tools/:year", getPrimaryAssessmentToolsByYear);
 priRouter.get("/curriculum/designs/:year", getPrimaryCurriculumDesignByYear);
 priRouter.get("/grade1/examinations/:year", getGrade1ExamsByYear);
 priRouter.get("/grade2/examinations/:year", getGrade2ExamsByYear);
 priRouter.get("/grade3/examinations/:year", getGrade3ExamsByYear);
 priRouter.get("/grade4/examinations/:year", getGrade4ExamsByYear);
 priRouter.get("/grade5/examinations/:year", getGrade5ExamsByYear);
 priRouter.get("/grade6/examinations/:year", getGrade6ExamsByYear);
 priRouter.get("/holiday/assignments/:year", getPrimaryHolidayAssignmentsByYear);

 priRouter.get("/scheme/file/:id",protectedEndpoint, getPrimarySchemesFileByID)
 priRouter.get("/notes/file/:id",protectedEndpoint, getPrimaryRevisionNotesFileByID)
 priRouter.get("/revision/note/file/:id",protectedEndpoint, getPrimaryHolidayAssignmentsFileByID)
 priRouter.get("/assessment/tool/file/:id",protectedEndpoint, getPrimaryAssessmentToolsFileByID)
 priRouter.get("/curriculum/design/file/:id",protectedEndpoint, getPrimaryCurriculumDesignFileByID)
 priRouter.get("/grade1/examination/file/:id",protectedEndpoint, getGrade1ExamsFileByID)
 priRouter.get("/grade2/examination/file/:id",protectedEndpoint, getGrade2ExamsFileByID)
 priRouter.get("/grade3/examination/file/:id",protectedEndpoint, getGrade3ExamsFileByID)
 priRouter.get("/grade4/examination/file/:id",protectedEndpoint, getGrade4ExamsFileByID)
 priRouter.get("/grade5/examination/file/:id",protectedEndpoint, getGrade5ExamsFileByID)
 priRouter.get("/grade6/examination/file/:id",protectedEndpoint, getGrade6ExamsFileByID)
 priRouter.get("/holiday/assignment/file/:id",protectedEndpoint, getPrimaryHolidayAssignmentsFileByID)
 


 priRouter.delete("/schemes/:id", deletePrimarySchemesByID)
 priRouter.delete("/notes/file/:id", deletePrimaryRevisionNotesByID)
 priRouter.delete("/holiday/revision/:id", deletePrimaryHolidayAssignmentsByID)
 priRouter.delete("/assessment/tools/:id", deletePrimaryAssessmentToolsByID)
 priRouter.delete("/curriculum/designs/:id", deletePrimaryCurriculumDesignByID)
 priRouter.delete("/grade1/examinations/:id", deleteGrade1ExamsByID)
 priRouter.delete("/grade2/examinations/:id", deleteGrade2ExamsByID)
 priRouter.delete("/grade3/examinations/:id", deleteGrade3ExamsByID)
 priRouter.delete("/grade4/examinations/:id", deleteGrade4ExamsByID)
 priRouter.delete("/grade5/examinations/:id", deleteGrade5ExamsByID)
 priRouter.delete("/grade6/examinations/:id", deleteGrade6ExamsByID)
 
 priRouter.put("/schemes/:id", updatePrimarySchemeByID)
 priRouter.put("/notes/file/:id", updatePrimaryRevisionNotesByID)
 priRouter.put("/holiday/revision/:id", updatePrimaryHolidayAssignmentsByID)
 priRouter.put("/assessment/tools/:id", updatePrimaryAssessmentToolsByID)
 priRouter.put("/curriculum/designs/:id", updatePrimaryCurriculumDesignByID)
 priRouter.put("/grade1/examinations/:id", updateGrade1ExamsByID)
 priRouter.put("/grade2/examinations/:id", updateGrade2ExamsByID)
 priRouter.put("/grade3/examinations/:id", updateGrade3ExamsByID)
 priRouter.put("/grade4/examinations/:id", updateGrade4ExamsByID)
 priRouter.put("/grade5/examinations/:id", updateGrade5ExamsByID)
 priRouter.put("/grade6/examinations/:id", updateGrade6ExamsByID)
 




export {priRouter}