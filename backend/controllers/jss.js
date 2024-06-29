import { deleteAllResources, deleteResource, updateResourceById, getResources,getResourcesByYear, getFilebyID } from "./resource.js";
// CREATION OF JSS RESOURCES

//RETRIEVE ALL (JSS)
export const getJssSchemes = async (req, res) => {
    return getResources(req, res, 'jss.schemes');
};
export const getJSSRevisionNotes = async (req, res) => {
    return getResources(req, res, 'jss.revision_notes');
};
export const getJssCurriculumdesign = async (req, res) => {
    return getResources(req, res, 'jss.curriculum_designs');
};

export const getJssAssessmentTools = async (req, res) => {
    return getResources(req, res, 'jss.assessment_tools');
};

export const getGrade7Examinations = async (req, res) => {
    return getResources(req, res, 'jss.grade7_examinations');
};

export const getGrade8Examinations = async (req, res) => {
    return getResources(req, res, 'jss.grade8_examinations');
};
export const getJssfullSetExaminations = async (req, res) => {
    return getResources(req, res, 'jss.fullset_examinations');
};

export const getJssHolidayAssignments = async (req, res) => {
    return getResources(req, res, 'jss.holiday_assignments');
};

//GET BY YEAR
export const getJssAssessmentToolsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'jss.assessment_tools');
}
export const getJssHolidayAssignmentsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'jss.holiday_assignments');
}
export const getGrade7ExaminationsByYear = async (req, res) => {
    return getResources(req, res, 'jss.grade7_examinations');
};
export const getGrade8ExaminationsByYear = async (req, res) => {
    return getResources(req, res, 'jss.grade8_examinations');
};
export const getJSSRevisionNotesByYear = async (req, res) => {
    return getResources(req, res, 'jss.revision_notes');
};
export const getJssfullSetExaminationsByYear = async (req, res) => {
    return getResources(req, res, 'jss.fullset_examinations');
};
export const getJssCurriculumdesignByYear = async (req, res) => {
    return getResources(req, res, 'jss.curriculum_designs');
};

// DELETION OF ALL RESOURCES (JSS)
export const deleteJssSchemes = async (req, res) => {
    return deleteAllResources(req, res, 'jss.schemes');
};
export const deleteJSSRevisionNotes = async (req, res) => {
    return deleteAllResources(req, res, 'jss.revision_notes');
};

export const deleteAllJssCurriculumdesigns = async (req, res) => {
    return deleteAllResources(req, res, 'jss.curriculum_designs');
};

export const deleteJssAssesmentTools = async (req, res) => {
    return deleteAllResources(req, res, 'jss.assessment_tools');
};

export const deleteGrade7Examinations = async (req, res) => {
    return deleteAllResources(req, res, 'jss.grade7_examinations');
};

export const deleteGrade8Examinations = async (req, res) => {
    return deleteAllResources(req, res, 'jss.grade8_examinations');
};

export const deleteAllJssfullSetExaminations = async (req, res) => {
    return deleteAllResources(req, res, 'jss.fullset_examinations');
};



export const deleteAllJssHassignments = async (req, res) => {
    return deleteResource(req, res, 'jss.holiday_assignments');
};

//DELETE BY ID (JSS)
export const deleteJSSRevisionNotesByID = async (req, res) => {
    return deleteResource(req, res, 'jss.revision_notes');
};
export const deleteJssSchemeByID = async (req, res) => {
    return deleteResource(req, res, 'jss.schemes');
};

export const deleteJssCurriculumdesignByID = async (req, res) => {
    return deleteResource(req, res, 'jss.curriculum_designs');
};

export const deleteJssAssesmentToolsByID = async (req, res) => {
    return deleteResource(req, res, 'jss.assessment_tools');
};

export const deleteGrade7ExaminationByID = async (req, res) => {
    return deleteResource(req, res, 'jss.grade7_examinations');
};

export const deleteGrade8ExaminationByID = async (req, res) => {
    return deleteResource(req, res, 'jss.grade8_examinations');
};

export const deleteJssfullSetExaminationByID = async (req, res) => {
    return deleteResource(req, res, 'jss.fullset_examinations');
};

export const deleteJssnotesByID = async (req, res) => {
    return deleteResource(req, res, 'jssnotes');
};

export const deleteJssHassignmentsByID = async (req, res) => {
    return deleteResource(req, res, 'jss.holiday_assignments');
};

// UPDATE BY ID (JSS)
export const updateJssSchemeByID = async (req, res) => {
    return updateResourceById(req, res, 'jss.schemes');
};

export const updateJssCurriculumdesignByID = async (req, res) => {
    return ByID(req, res, 'jss.curriculum_designs');
};

export const updateJssAssesmentToolsByID = async (req, res) => {
    return updateResourceById(req, res, 'jss.assessment_tools');
};

export const updateGrade7ExaminationByID = async (req, res) => {
    return updateResourceById(req, res, 'jss.grade7_examinations');
};

export const updateGrade8ExaminationByID = async (req, res) => {
    return updateResourceById(req, res, 'jss.grade8_examinations');
};

export const updateJssfullSetExaminationByID = async (req, res) => {
    return updateResourceById(req, res, 'jss.fullset_examinations');
};

export const updateJssnotesByID = async (req, res) => {
    return updateResourceById(req, res, 'jss.revision_notes');
};

export const updateJssHassignmentsByID = async (req, res) => {
    return updateResourceById(req, res, 'jss.holiday_assignments');
};

//GET FILE BY ID (JSS) && DOWNLOADING FILE
export const getJssSchemeFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jss.schemes');
};

export const getJssCurriculumdesignFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jss.curriculum_designs');
};

export const getJssAssesmentToolsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jss.assessment_tools');
};

export const getGrade7ExaminationFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jss.grade7_examinations');
};

export const getGrade8ExaminationFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jss.grade8_examinations');
};

export const getJssfullSetExaminationFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jss.fullset_examinations');
};

export const getJssRevisionNotesFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jss.revision_notes');
};

export const getJssHassignmentsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jss.holiday_assignments');
};