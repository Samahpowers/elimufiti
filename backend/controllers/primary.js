import {getResources, 
        getFilebyID, 
        deleteResource, 
        updateResourceById, 
        getResourcesByYear} from "./resource.js"

//CREATE




//RETRIEVE
export const getPrimaryCurriculumDesign = async (req, res) => {
    return getResources(req, res, 'primarySchool.curriculum_designs');
};
export const getPrimarySchemes = async (req, res) => {
    return getResources(req, res, 'primarySchool.schemes');
};
export const getPrimaryAssessmentTools = async (req, res) => {
    return getResources(req, res, 'primarySchool.assessment_tools');
};
export const getPrimaryRevisionNotes = async (req, res) => {
    return getResources(req, res, 'primarySchool.revision_notes');
};
export const getPrimaryHolidayAssignments = async (req, res) => {
    return getResources(req, res, 'primarySchool.holiday_assignments');
};
export const getGrade1Exams = async (req, res) => {
    return getResources(req, res, 'primarySchool.grade1_exams');
};

export const getGrade2Exams = async (req, res) => {
    return getResources(req, res, 'primarySchool.grade2_exams');
};
export const getGrade3Exams = async (req, res) => {
    return getResources(req, res, 'primarySchool.grade3_exams');
};
export const getGrade4Exams = async (req, res) => {
    return getResources(req, res, 'primarySchool.grade4_exams');
};
export const getGrade5Exams = async (req, res) => {
    return getResources(req, res, 'primarySchool.grade5_exams');
};
export const getGrade6Exams = async (req, res) => {
    return getResources(req, res, 'primarySchool.grade6_exams');
};
//GET FILE
export const getPrimaryCurriculumDesignFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.curriculum_designs');
};
export const getPrimarySchemesFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.schemes');
};
export const getPrimaryAssessmentToolsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.assessment_tools');
};
export const getPrimaryRevisionNotesFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.revision_notes');
};
export const getPrimaryHolidayAssignmentsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.holiday_assignments');
};
export const getGrade1ExamsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.grade1_exams');
};

export const getGrade2ExamsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.grade2_exams');
};
export const getGrade3ExamsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.grade3_exams');
};
export const getGrade4ExamsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.grade4_exams');
};
export const getGrade5ExamsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.grade5_exams');
};
export const getGrade6ExamsFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primarySchool.grade6_exams');
};
//RETRIEVE BY YEAR
export const getPrimaryRevisionNotesByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.revision_notes');
}
export const getPrimaryHolidayAssignmentsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.holiday_assignments');
}
export const getPrimaryCurriculumDesignByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.curriculum_designs');
}
export const getPrimaryAssessmentToolsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.assessment_tools');
}
export const getPrimarySchemesByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.schemes');
}
export const getGrade1ExamsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.grade1_exams');
}

export const getGrade2ExamsByYear = async (req, res) => {
return getResourcesByYear(req, res, 'primarySchool.grade2_exams');
}  
export const getGrade3ExamsByYear = async (req, res) => {
return getResourcesByYear(req, res, 'primarySchool.grade3_exams');
}  
export const getGrade4ExamsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.grade4_exams');
}
export const getGrade5ExamsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.grade5_exams');
}
export const getGrade6ExamsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'primarySchool.grade6_exams');
}


// UPDATE BY ID
export const updatePrimarySchemeByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.schemes');
};
export const updatePrimaryCurriculumDesignByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.curriculum_designs');
};
export const updatePrimaryAssessmentToolsByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.assessment_tools');
};
export const updatePrimaryRevisionNotesByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.revision_notes');
};
export const updatePrimaryHolidayAssignmentsByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.holiday_assignments');
};
export const updateGrade1ExamsByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.grade1_exams');
};

export const updateGrade2ExamsByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.grade2_exams');
};
export const updateGrade3ExamsByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.grade3_exams');
};
export const updateGrade4ExamsByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.grade4_exams');
};
export const updateGrade5ExamsByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.grade5_exams');
};
export const updateGrade6ExamsByID = async (req, res) => {
    return updateResourceById(req, res, 'primarySchool.grade6_exams');
};
//DELETE BY ID

export const deletePrimaryCurriculumDesignByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.curriculum_designs');
};
export const deletePrimarySchemesByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.schemes');
};
export const deletePrimaryAssessmentToolsByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.assessment_tools');
};
export const deletePrimaryRevisionNotesByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.revision_notes');
};
export const deletePrimaryHolidayAssignmentsByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.holiday_assignments');
};
export const deleteGrade1ExamsByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.grade1_exams');
};

export const deleteGrade2ExamsByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.grade2_exams');
};
export const deleteGrade3ExamsByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.grade3_exams');
};
export const deleteGrade4ExamsByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.grade4_exams');
};
export const deleteGrade5ExamsByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.grade5_exams');
};
export const deleteGrade6ExamsByID = async (req, res) => {
    return deleteResource(req, res, 'primarySchool.grade6_exams');
};