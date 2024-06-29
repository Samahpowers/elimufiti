import express from "express"
import {  
        //CREATE
        
        //DELETE
        deleteGrade7Examinations, 
        deleteGrade8Examinations, 
        deleteAllJssCurriculumdesigns, 
        deleteAllJssfullSetExaminations, 
        deleteAllJssHassignments,        
        deleteJssSchemes, 
        deleteJssAssesmentTools, 
        deleteGrade7ExaminationByID, 
        deleteGrade8ExaminationByID, 
        deleteJssCurriculumdesignByID, 
        deleteJssfullSetExaminationByID, 
        deleteJssHassignmentsByID, 
        deleteJssnotesByID, 
        deleteJssSchemeByID,
        deleteJssAssesmentToolsByID,
        //GET ALL
        getGrade7Examinations,
        getJssCurriculumdesign,
        getJssfullSetExaminations,        
        getJssSchemes,
        
        // UPDATE BY ID
        updateGrade7ExaminationByID,
        updateGrade8ExaminationByID,
        updateJssCurriculumdesignByID,
        updateJssfullSetExaminationByID,
        updateJssHassignmentsByID,
        updateJssnotesByID,
        updateJssSchemeByID,
        updateJssAssesmentToolsByID,
        //GET BY ID
        getJssSchemeFileByID,
        getJssAssesmentToolsFileByID,
        getJssCurriculumdesignFileByID,
        getGrade7ExaminationFileByID,        
        getJssfullSetExaminationFileByID,
        getJssRevisionNotesFileByID,
        getJssHassignmentsFileByID,
        getGrade8Examinations,        
        getJssAssessmentToolsByYear,
        getJssAssessmentTools,
        getGrade7ExaminationsByYear,
        getJssHolidayAssignments,
        getJSSRevisionNotesByYear,
        deleteJSSRevisionNotes,
        getJSSRevisionNotes,
        getGrade8ExaminationsByYear,
        getJssfullSetExaminationsByYear,
        getJssHolidayAssignmentsByYear,
        getJssCurriculumdesignByYear,
        getGrade8ExaminationFileByID} from "../controllers/jss.js"
import upload from "../middlewares/upload.js"
import { protectedEndpoint } from "../controllers/auth.js"
import { createResourceHandler } from "../controllers/resource.js"



const jssRouter = express.Router()

jssRouter.post("/create/schemes", upload.single("file"), createResourceHandler) 
jssRouter.post("/create/assessment/tools",upload.single("file"), createResourceHandler)
jssRouter.post("/create/curriculum/designs",upload.single("file"), createResourceHandler)
jssRouter.post("/create/grade7/examinations",upload.single("file"), createResourceHandler)
jssRouter.post("/create/fullset/examinations",upload.single("file"), createResourceHandler)
jssRouter.post("/create/revision/notes",upload.single("file"), createResourceHandler)
jssRouter.post("/create/grade8/examinations",upload.single("file"), createResourceHandler)
jssRouter.post("/create/fullset/exams",upload.single("file"), createResourceHandler)
jssRouter.post("/create/holiday/assignment",upload.single("file"), createResourceHandler)

jssRouter.post("/create/holiday/assignments",upload.single("file"), createResourceHandler)
//GET ALL
jssRouter.get   ("/schemes",  getJssSchemes) 
jssRouter.get   ("/assessment/tools", getJssAssessmentTools)
jssRouter.get   ("/curriculum/designs", getJssCurriculumdesign)
jssRouter.get   ("/grade7/examinations", getGrade7Examinations)
jssRouter.get   ("/grade8/examinations", getGrade8Examinations)
jssRouter.get   ("/fullset/examinations", getJssfullSetExaminations)
jssRouter.get   ("/holiday/assignments", getJssHolidayAssignments)
jssRouter.get   ("/revision/notes", getJSSRevisionNotes)
//GET BY YEAR
jssRouter.get   ("/assessment/tools/:year", getJssAssessmentToolsByYear)
jssRouter.get   ("/grade7/examinations/:year", getGrade7ExaminationsByYear)
jssRouter.get   ("/grade8/examinations/:year", getGrade8ExaminationsByYear)
jssRouter.get   ("/revision/notes/:year", getJSSRevisionNotesByYear)
jssRouter.get   ("/fullset/examinations/:year", getJssfullSetExaminationsByYear)
jssRouter.get   ("/fullset/examinations/:year", getJssfullSetExaminationsByYear)
jssRouter.get   ("/curriculum/designs/:year", getJssCurriculumdesignByYear)
jssRouter.get   ("/holiday/assignments/:year", getJssHolidayAssignmentsByYear)

//FILE
jssRouter.get   ("/schemes/file/:id",protectedEndpoint, getJssSchemeFileByID)
jssRouter.get   ("/assessment/tool/file/:id",protectedEndpoint, getJssAssesmentToolsFileByID)
jssRouter.get   ("/curriculum/design/file/:id", protectedEndpoint, getJssCurriculumdesignFileByID)
jssRouter.get   ("/grade7/examination/file/:id", protectedEndpoint, getGrade7ExaminationFileByID)
jssRouter.get   ("/grade8/examination/file/:id", protectedEndpoint, getGrade8ExaminationFileByID)
jssRouter.get   ("/fullset/examination/file/:id", protectedEndpoint,  getJssfullSetExaminationFileByID)
jssRouter.get   ("/revision/note/file/:id", protectedEndpoint,  getJssRevisionNotesFileByID)
jssRouter.get   ("/holiday/assignment/file/:id", protectedEndpoint, getJssHassignmentsFileByID)

jssRouter.delete("/delete/schemes", deleteJssSchemes)
jssRouter.delete ("/delete/assessment/tools", deleteJssAssesmentTools)
jssRouter.delete("/delete/curriculum/designs", deleteAllJssCurriculumdesigns)
jssRouter.delete("/delete/grade7/exams", deleteGrade7Examinations)
jssRouter.delete("/delete/grade8/exams",deleteGrade8Examinations)
jssRouter.delete("/delete/fullset/exams", deleteAllJssfullSetExaminations)
jssRouter.delete("/revision/delete/notes", deleteJSSRevisionNotes)
jssRouter.delete("/delete/holiday/assignments", deleteAllJssHassignments)

jssRouter.delete("/delete/schemes/:id",deleteJssSchemeByID)
jssRouter.delete ("/delete/assessment/tools/:id", deleteJssAssesmentToolsByID)
jssRouter.delete("/delete/curriculum/designs/:id", deleteJssCurriculumdesignByID)
jssRouter.delete("/delete/grade7/exams/:id", deleteGrade7ExaminationByID)
jssRouter.delete("/delete/grade8/exams/:id",deleteGrade8ExaminationByID)
jssRouter.delete("/delete/fullset/exams/:id", deleteJssfullSetExaminationByID)
jssRouter.delete("/revision/delete/notes/:id", deleteJssnotesByID)
jssRouter.delete("/delete/holiday/assignments/:id", deleteJssHassignmentsByID)

jssRouter.put("/update/schemes/:id",updateJssSchemeByID),
jssRouter.put("/update/assessment/tools/:id", updateJssAssesmentToolsByID)
jssRouter.put("/update/curriculum/designs/:id",updateJssCurriculumdesignByID)
jssRouter.put("/update/grade7/exams/:id", updateGrade7ExaminationByID)
jssRouter.put("/update/grade8/exams/:id",updateGrade8ExaminationByID)
jssRouter.put("/update/fullset/exams/:id", updateJssfullSetExaminationByID)
jssRouter.put("/update/revision/notes/:id", updateJssnotesByID)
jssRouter.put("/update/holiday/assignments/:id", updateJssHassignmentsByID)


export {jssRouter}