import express from "express"
import {  
        //CREATE
        createGrade7Examinations, 
        createGrade8Examinations, 
        createJssCurriculumdesign, 
        createJssfullSetExaminations, 
        createJssHassignments, 
        createJssnotes, 
        createJssScheme, 
        createJuniorAssesmentTools, 
        //DELETE
        deleteAllGrade7Examinations, 
        deleteAllGrade8Examinations, 
        deleteAllJssCurriculumdesigns, 
        deleteAllJssfullSetExaminations, 
        deleteAllJssHassignments, 
        deleteAllJssnotes, 
        deleteAllJssSchemes, 
        deleteAllJuniorAssesmentTools, 
        deleteGrade7ExaminationByID, 
        deleteGrade8ExaminationByID, 
        deleteJssCurriculumdesignByID, 
        deleteJssfullSetExaminationByID, 
        deleteJssHassignmentsByID, 
        deleteJssnotesByID, 
        deleteJssSchemeByID,
        deleteJuniorAssesmentToolByID,
        //GET ALL
        getGrade7Examinations,
        getJssCurriculumdesign,
        getJssfullSetExaminations,
        getJssHassignments,
        getJssnotes,
        getJssSchemes,
        getJuniorAssesmentTools,
        // UPDATE BY ID
        updateGrade7ExaminationByID,
        updateGrade8ExaminationByID,
        updateJssCurriculumdesignByID,
        updateJssfullSetExaminationByID,
        updateJssHassignmentsByID,
        updateJssnotesByID,
        updateJssSchemeByID,
        updateJuniorAssesmentToolByID,
        //GET BY ID
        getJssSchemeFileByID,
        getJuniorAssesmentToolFileByID,
        getJssCurriculumdesignFileByID,
        getGrade7ExaminationFileByID,
        getGrade8ExaminationFileByID,
        getJssfullSetExaminationFileByID,
        getJssnotesFileByID,
        getJssHassignmentsFileByID,
        getGrade8Examinations} from "../controllers/jss.js"
import upload from "../controllers/middlewares/upload.js"


const jssRouter = express.Router()

jssRouter.post("/create/schemes", upload.single("file"), createJssScheme) 
jssRouter.post("/create/assessment/tools",upload.single("file"), createJuniorAssesmentTools)
jssRouter.post("/create/curriculum/designs",upload.single("file"), createJssCurriculumdesign)
jssRouter.post("/create/grade7/exams",upload.single("file"), createGrade7Examinations)
jssRouter.post("/create/grade8/exams",upload.single("file"), createGrade8Examinations)
jssRouter.post("/create/fullset/exams",upload.single("file"), createJssfullSetExaminations)
jssRouter.post("/create/notes",upload.single("file"), createJssnotes)
jssRouter.post("/create/holiday/assignments",upload.single("file"), createJssHassignments)

jssRouter.get   ("/schemes",  getJssSchemes) 
jssRouter.get   ("/assessment/tools", getJuniorAssesmentTools)
jssRouter.get   ("/curriculum/designs", getJssCurriculumdesign)
jssRouter.get   ("/grade7/exams", getGrade7Examinations)
jssRouter.get   ("/grade8/exams", getGrade8Examinations)
jssRouter.get   ("/fullset/exams", getJssfullSetExaminations)
jssRouter.get   ("/notes", getJssnotes)
jssRouter.get   ("/holiday/assignments", getJssHassignments)

jssRouter.get   ("/schemes/file/:id",getJssSchemeFileByID)
jssRouter.get   ("/assessment/tools/file/:id", getJuniorAssesmentToolFileByID)
jssRouter.get   ("/curriculum/designs/file/:id",getJssCurriculumdesignFileByID)
jssRouter.get   ("/grade7/exams/file/:id", getGrade7ExaminationFileByID)
jssRouter.get   ("/grade8/exams/file/:id",getGrade8ExaminationFileByID)
jssRouter.get   ("/fullset/exams/file/:id", getJssfullSetExaminationFileByID)
jssRouter.get   ("/notes/file/:id", getJssnotesFileByID)
jssRouter.get   ("/holiday/assignments/file/:id", getJssHassignmentsFileByID)

jssRouter.delete("/delete/schemes", deleteAllJssSchemes)
jssRouter.delete ("/delete/assessment/tools", deleteAllJuniorAssesmentTools)
jssRouter.delete("/delete/curriculum/designs", deleteAllJssCurriculumdesigns)
jssRouter.delete("/delete/grade7/exams", deleteAllGrade7Examinations)
jssRouter.delete("/delete/grade8/exams",deleteAllGrade8Examinations)
jssRouter.delete("/delete/fullset/exams", deleteAllJssfullSetExaminations)
jssRouter.delete("/delete/notes", deleteAllJssnotes)
jssRouter.delete("/delete/holiday/assignments", deleteAllJssHassignments)

jssRouter.delete("/delete/schemes/:id",deleteJssSchemeByID)
jssRouter.delete ("/delete/assessment/tools/:id", deleteJuniorAssesmentToolByID)
jssRouter.delete("/delete/curriculum/designs/:id", deleteJssCurriculumdesignByID)
jssRouter.delete("/delete/grade7/exams/:id", deleteGrade7ExaminationByID)
jssRouter.delete("/delete/grade8/exams/:id",deleteGrade8ExaminationByID)
jssRouter.delete("/delete/fullset/exams/:id", deleteJssfullSetExaminationByID)
jssRouter.delete("/delete/notes/:id", deleteJssnotesByID)
jssRouter.delete("/delete/holiday/assignments/:id", deleteJssHassignmentsByID)

jssRouter.put("/update/schemes/:id",updateJssSchemeByID),
jssRouter.put("/update/assessment/tools/:id", updateJuniorAssesmentToolByID)
jssRouter.put("/update/curriculum/designs/:id",updateJssCurriculumdesignByID)
jssRouter.put("/update/grade7/exams/:id", updateGrade7ExaminationByID)
jssRouter.put("/update/grade8/exams/:id",updateGrade8ExaminationByID)
jssRouter.put("/update/fullset/exams/:id", updateJssfullSetExaminationByID)
jssRouter.put("/update/notes/:id", updateJssnotesByID)
jssRouter.put("/update/holiday/assignments/:id", updateJssHassignmentsByID)


export {jssRouter}