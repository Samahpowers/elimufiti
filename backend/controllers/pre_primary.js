import { createResource, 
    getResources, 
    deleteResource, 
    getFilebyID, 
    getResourcesByYear, 
    updateResourceById } from "./resource.js"




// RETRIEVE ALL RESOURCES
export const getPriPrimarySchemes = async (req, res) => {
return getResources(req, res, 'preprimary.schemes');
}
export const getPriPrimaryCurriculumDesign = async (req, res) => {
return getResources(req, res, 'preprimary.curriculum_designs');
}
export const getPlayGroupExams = async (req, res) => {
return getResources(req, res, 'preprimary.playgroup_exams');
}
export const getPP1Exams = async (req, res) => {
return getResources(req, res, 'preprimary.pp1_exams');
}
export const getPP2Exams = async (req, res) => {
return getResources(req, res, 'preprimary.pp2_exams');
}
export const getPriPrimaryHolidayAssignments = async (req, res) => {
return getResources(req, res, 'preprimary.holiday_assignments');
}

// RETRIEVE RESOURCES BY YEAR
export const getPriPrimaryCurriculumDesignByYear = async (req, res) => {
return getResourcesByYear(req, res, 'preprimary.curriculum_designs');
}
export const getPrePrimarySchemesByYear = async (req, res) => {
return getResourcesByYear(req, res, 'preprimary.schemes');
}
export const getPlayGroupExamsByYear = async (req, res) => {
return getResourcesByYear(req, res, 'preprimary.playgroup_exams');
}
export const getPPE1ExamsByYear = async (req, res) => {
return getResourcesByYear(req, res, 'preprimary.pp1_exams');
}
export const getPPE2ExamsByYear = async (req, res) => {
return getResourcesByYear(req, res, 'preprimary.pp2_exams');
}
export const getPriPrimaryHolidayAssignmentsByYear = async (req, res) => {
return getResourcesByYear(req, res, 'preprimary.holiday_assignments');
}

// UPDATE RESOURCE BY ID
export const updatePriPrimarySchemeByID = async (req, res) => {
return updateResourceById(req, res, 'preprimary.schemes');
}
export const updatePlayGroupExamByID = async (req, res) => {
return updateResourceById(req, res, 'preprimary.playgroup_exams');
}
export const updateHolidayAssignmentsByID = async (req, res) => {
return updateResourceById(req, res, 'holiday_assignments');
}
export const updatePriPrimaryHolidayAssignmentsByID = async (req, res) => {
return updateResourceById(req, res, 'preprimary.holiday_assignments');
}
export const updatePriPrimaryCurriculumDesignByID = async (req, res) => {
return updateResourceById(req, res, 'preprimary.curriculum_designs');
}

// DELETE RESOURCE BY ID
export const deletePriPrimarySchemeByID = async (req, res) => {
return deleteResource(req, res, 'preprimary.schemes');
}
export const deletePP1ExamByID = async (req, res) => {
return deleteResource(req, res, 'preprimary.pp1_exams');
}
export const deletePP2ExamByID = async (req, res) => {
return deleteResource(req, res, 'preprimary.pp2_exams');
}
export const deletePlayGroupExamByID = async (req, res) => {
return deleteResource(req, res, 'preprimary.playgroup_exams');
}
export const deletePriPrimaryHolidayAssignmentsByID = async (req, res) => {
return deleteResource(req, res, 'preprimary.holiday_assignments');
}
export const deletePriPrimaryCurriculumDesignByID = async (req, res) => {
return deleteResource(req, res, 'preprimary.curriculum_designs');
}

// DOWNLOAD FILE BY ID
export const getPriPrimarySchemeFileByID = async (req, res) => {
return getFilebyID(req, res, 'preprimary.schemes');
}
export const getPlayGroupExamByID = async (req, res) => {
return getFilebyID(req, res, 'preprimary.playgroup_exams');
}
export const getPP1ExamByID = async (req, res) => {
return getFilebyID(req, res, 'preprimary.pp1_exams');
}
export const getPP2ExamByID = async (req, res) => {
return getFilebyID(req, res, 'preprimary.pp2_exams');
}
export const getPrePriPrimaryHolidayAssignmentFileByID = async (req, res) => {
return getFilebyID(req, res, 'preprimary.holiday_assignments');
}
export const getPrePrimaryRevisionFileByID = async (req, res) => {
return getFilebyID(req, res, 'preprimary.holiday_revisions');
}
export const getPriPrimaryCurriculumDesignFileByID = async (req, res) => {
return getFilebyID(req, res, 'preprimary.curriculum_designs');
}
