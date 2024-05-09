import { createResource, getResources, updateResource, getFilebyID, deleteResource } from "../controllers/resource.js";

export const createSecScheme = async (req, res) => {
    return createResource(req, res, 'secondaryschemes');
};




//RETRIEVE
export const getSecondarySchemes = async (req, res) => {
    return getResources(req, res, 'secondaryschemes');
};


// UPDATE BY ID
export const updateSecondarySchemeByID = async (req, res) => {
    return updateResource(req, res, 'secondaryschemes');
};
//DELETE BY ID
export const getSecondarySchemeFileByID = async (req, res) => {
    return getFilebyID(req, res, 'secondaryschemes');
};

export const deleteSecondarySchemeByID = async (req, res) => {
    return deleteResource(req, res, 'secondaryschemes');
};