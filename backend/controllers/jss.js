import { createResource, deleteAllResources, deleteResource, updateResource, getResources, getFilebyID } from "./resource.js";
// CREATION OF RESOURCES
export const createJssScheme = async (req, res) => {
    return createResource(req, res, 'jssschemes');
};
export const createJssCurriculumdesign = async (req, res) => {
    return createResource(req, res, 'jsscuricculumdesigns');
};

export const createJuniorAssesmentTools = async (req, res) => {
    return createResource(req, res, 'jssjuniorassesmenttools');
};

export const createGrade7Examinations = async (req, res) => {
    return createResource(req, res, 'grade7examinations');
};

export const createGrade8Examinations = async (req, res) => {
    return createResource(req, res, 'grade8examinations');
};
export const createJssfullSetExaminations = async (req, res) => {
    return createResource(req, res, 'jssfullSetexaminations');
};
export const createJssnotes = async (req, res) => {
    return createResource(req, res, 'jssnotes');
};
export const createJssHassignments = async (req, res) => {
    return createResource(req, res, 'jsshoididayassignments');
};

//RETRIEVE ALL
export const getJssSchemes = async (req, res) => {
    return getResources(req, res, 'jssschemes');
};
export const getJssCurriculumdesign = async (req, res) => {
    return getResources(req, res, 'jsscuricculumdesigns');
};

export const getJuniorAssesmentTools = async (req, res) => {
    return getResources(req, res, 'jsscurriculumdesigns');
};

export const getGrade7Examinations = async (req, res) => {
    return getResources(req, res, 'grade7examinations');
};

export const getGrade8Examinations = async (req, res) => {
    return getResources(req, res, 'grade8examinations');
};
export const getJssfullSetExaminations = async (req, res) => {
    return getResources(req, res, 'jssfullSetexaminations');
};
export const getJssnotes = async (req, res) => {
    return getResources(req, res, 'jssnotes');
};
export const getJssHassignments = async (req, res) => {
    return getResources(req, res, 'jsshoididayassignments');
};
// DELETION OF ALL RESOURCES
export const deleteAllJssSchemes = async (req, res) => {
    return deleteAllResources(req, res, 'jssschemes');
};

export const deleteAllJssCurriculumdesigns = async (req, res) => {
    return deleteAllResources(req, res, 'jsscuricculumdesigns');
};

export const deleteAllJuniorAssesmentTools = async (req, res) => {
    return deleteAllResources(req, res, 'jsscurriculumdesigns');
};

export const deleteAllGrade7Examinations = async (req, res) => {
    return deleteAllResources(req, res, 'grade7examinations');
};

export const deleteAllGrade8Examinations = async (req, res) => {
    return deleteAllResources(req, res, 'grade8examinations');
};

export const deleteAllJssfullSetExaminations = async (req, res) => {
    return deleteAllResources(req, res, 'jssfullSetexaminations');
};

export const deleteAllJssnotes = async (req, res) => {
    return deleteAllResources(req, res, 'jssnotes');
};

export const deleteAllJssHassignments = async (req, res) => {
    return deleteResource(req, res, 'jsshoididayassignments');
};

//DELETE BY ID
export const deleteJssSchemeByID = async (req, res) => {
    return deleteResource(req, res, 'jssschemes');
};

export const deleteJssCurriculumdesignByID = async (req, res) => {
    return deleteResource(req, res, 'jsscuricculumdesigns');
};

export const deleteJuniorAssesmentToolByID = async (req, res) => {
    return deleteResource(req, res, 'jsscurriculumdesigns');
};

export const deleteGrade7ExaminationByID = async (req, res) => {
    return deleteResource(req, res, 'grade7examinations');
};

export const deleteGrade8ExaminationByID = async (req, res) => {
    return deleteResource(req, res, 'grade8examinations');
};

export const deleteJssfullSetExaminationByID = async (req, res) => {
    return deleteResource(req, res, 'jssfullSetexaminations');
};

export const deleteJssnotesByID = async (req, res) => {
    return deleteResource(req, res, 'jssnotes');
};

export const deleteJssHassignmentsByID = async (req, res) => {
    return deleteResource(req, res, 'jsshoididayassignments');
};

// UPDATE BY ID
export const updateJssSchemeByID = async (req, res) => {
    return updateResource(req, res, 'jssschemes');
};

export const updateJssCurriculumdesignByID = async (req, res) => {
    return updateResource(req, res, 'jsscuricculumdesigns');
};

export const updateJuniorAssesmentToolByID = async (req, res) => {
    return updateResource(req, res, 'jsscurriculumdesigns');
};

export const updateGrade7ExaminationByID = async (req, res) => {
    return updateResource(req, res, 'grade7examinations');
};

export const updateGrade8ExaminationByID = async (req, res) => {
    return updateResource(req, res, 'grade8examinations');
};

export const updateJssfullSetExaminationByID = async (req, res) => {
    return updateResource(req, res, 'jssfullSetexaminations');
};

export const updateJssnotesByID = async (req, res) => {
    return updateResource(req, res, 'jssnotes');
};

export const updateJssHassignmentsByID = async (req, res) => {
    return updateResource(req, res, 'jsshoididayassignments');
};

//GET FILE BY ID
export const getJssSchemeFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jssschemes');
};

export const getJssCurriculumdesignFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jsscuricculumdesigns');
};

export const getJuniorAssesmentToolFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jsscurriculumdesigns');
};

export const getGrade7ExaminationFileByID = async (req, res) => {
    return getFilebyID(req, res, 'grade7examinations');
};

export const getGrade8ExaminationFileByID = async (req, res) => {
    return getFilebyID(req, res, 'grade8examinations');
};

export const getJssfullSetExaminationFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jssfullSetexaminations');
};

export const getJssnotesFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jssnotes');
};

export const getJssHassignmentsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'jsshoididayassignments');
};