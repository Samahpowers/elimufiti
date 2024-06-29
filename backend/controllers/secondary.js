import { createResource, 
    getResources, 
    getResourcesByYear, 
    updateResourceById, 
    getFilebyID, 
    deleteResource, 
    getResourcesByForm } from "../controllers/resource.js";
//RETRIEVE
export const getSecondarySchemes = async (req, res) => {
    return getResources(req, res, 'secondary.schemes');
};
export const getSecondaryNotes = async (req, res) => {
    return getResources(req, res, 'secondary.revision_notes');
};
export const getKcseTrialExaminations = async (req, res) => {
    return getResources(req, res, 'secondary.kcse_trial_examinations');
};
export const getSecondaryFullSetExaminations = async (req, res) => {
    return getResources(req, res, 'secondary.fullset_examinations');
};
export const getSecondaryHolidayRevisions = async (req, res) => {
    return getResources(req, res, 'secondary.holiday_revisions');
};
export const getSecondaryPastPapers = async (req, res) => {
    return getResources(req, res, 'secondary.ksce_past_papers');
};

//RETRIEVE PER YEAR
export const getFullSetExaminationsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'secondary.fullset_examinations');
    }
export const getSecondaryNotesByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'secondary.revision_notes');
    }
export const getSecondarySchemesByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'secondary.schemes');
    }
export const getSecondaryKCSEtrialsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'secondary.kcse_trial_examinations');
    }
export const getSecondaryKCSEPastPapersByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'secondary.ksce_past_papers');
    }
export const getSecondaryHolidayRevisionsByYear = async (req, res) => {
    return getResourcesByYear(req, res, 'secondary.holiday_revisions');
    }
export const getSecondarySchemesByForm = async (req, res) => {
    return getResourcesByForm(req, res, 'secondary.schemes');
    }
//GET FILE BY ID
export const getSecondarySchemeFileByID =async(req, res)=>{
        return getFilebyID(req, res, 'secondary.schemes')
}
export const getSecondaryKCSEtrialsFileByID =async(req, res)=>{
        return getFilebyID(req, res, 'secondary.kcse_trial_examinations')
}
export const getSecondaryKCSEPastPapersFileByID =async(req, res)=>{
        return getFilebyID(req, res, 'secondary.ksce_past_papers')
}
export const getSecondaryHolidayRevisionsFileByID =async(req, res)=>{
        return getFilebyID(req, res, 'secondary.holiday_revisions')
}
export const getFullSetExaminationsFileByID =async(req, res)=>{
        return getFilebyID(req, res, 'secondary.fullset_examinations')
}
export const getSecondaryNotesFileByID =async(req, res)=>{
        return getFilebyID(req, res, 'secondary.revision_notes')
}
// UPDATE BY ID
export const updateSecondarySchemeByID = async (req, res) => {
    return updateResourceById(req, res, 'secondary.schemes');
};
export const updateSecondaryNotesByID = async (req, res) => {
    return updateResourceById(req, res, 'secondary.revision_notes');
};
export const updateKCSETrialExaminationsByID = async (req, res) => {
    return updateResourceById(req, res, 'secondary.schemes');
};
export const updateSecondaryFullSetExaminationByID = async (req, res) => {
    return updateResourceById(req, res, 'secondary.schemes');
};
export const updateSecondaryHolidayRevisionsByID = async (req, res) => {
    return updateResourceById(req, res, 'secondary.schemes');
};
export const updateSecondaryPastPapersByID = async (req, res) => {
    return updateResourceById(req, res, 'secondary.schemes');
};

//DELETE BY ID
export const deleteSecondarySchemeByID = async (req, res) => {
    return deleteResource(req, res, 'secondary.schemes');
};
export const deleteSecondaryNotesByID = async (req, res) => {
    return deleteResource(req, res, 'secondary.schemes');
};
export const deleteKCSETrialExaminationsByID = async (req, res) => {
    return deleteResource(req, res, 'secondary.schemes');
};
export const deleteSecondaryFullSetExaminationByID = async (req, res) => {
    return deleteResource(req, res, 'secondary.schemes');
};
export const deleteSecondaryHolidayRevisionsByID = async (req, res) => {
    return deleteResource(req, res, 'secondary.schemes');
};
export const deleteSecondaryPastPapersByID = async (req, res) => {
    return deleteResource(req, res, 'secondary.schemes');
};