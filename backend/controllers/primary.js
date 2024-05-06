import { createResource, getResources, updateResource, getFilebyID, deleteResource } from "./resource.js"

//CREATE
export const createScheme =(req,res)=>{
    return createResource(req, res, "primaryschemes")
}


//RETRIEVE
export const getPrimarySchemes = async (req, res) => {
    return getResources(req, res, 'primaryschemes');
};


// UPDATE BY ID
export const updatePrimarySchemeByID = async (req, res) => {
    return updateResource(req, res, 'primaryschemes');
};
//DELETE BY ID
export const getPrimarySchemeFileByID = async (req, res) => {
    return getFilebyID(req, res, 'primaryschemes');
};

export const deletePrimarySchemeByID = async (req, res) => {
    return deleteResource(req, res, 'primaryschemes');
};
