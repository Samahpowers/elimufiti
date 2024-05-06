import { createResource, getResources, deleteResource, getFilebyID } from "./resource.js"

//CREATE
export const createScheme =async(req, res)=>{
    return createResource(req, res, "pre_primary_schemes")
}


//RETRIEVE ALL
export const getPriPrimarySchemes = async (req, res) => {
    return getResources(req, res, 'pre_primary_schemes');
};

// UPDATE BY ID
export const updatePriPrimarySchemeByID = async (req, res) => {
    return updateResource(req, res, 'pre_primary_schemes');
};
//DELETE BY ID
export const getPriPrimarySchemeFileByID = async (req, res) => {
    return getFilebyID(req, res, 'pre_primary_schemes');
};

export const deletePriPrimarySchemeByID = async (req, res) => {
    return deleteResource(req, res, 'pre_primary_schemes');
};

