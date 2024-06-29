import {pool} from "../db.js";
import { handleValidationError, handleDatabaseError } from "./errorHandlers.js";
import { validationResult } from "express-validator";


export const createResource = async (req, res, tableName) => {
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return handleValidationError(res, errors);
        }

        // Check if req.file exists and has buffer
        if (!req.file || !req.file.buffer) {
            console.error('File data is missing or invalid.');
            return res.status(400).json({ error: 'File data is missing or invalid.' });
        }

        // Extract file data
        const { buffer: file, originalname: fileName } = req.file;
        const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);

        // Extract other data from request body
        const { form, term, subject, year, examMS, set, grade } = req.body;

        // Insert data into the database
        const sql = `INSERT INTO ${tableName} (form, term, subject, file, year,fileName, fileExtension, examMS, \`set\`, grade) VALUES (?, ?,?, ?, ?, ?, ?, ?, ?, ?)`;
        await pool.query(sql, [form, term, subject, file, year,fileName, fileExtension, examMS, set, grade]);

        // Log success message
        console.log('File data successfully saved to the database.');

        // Send success response
        return res.status(200).json({ message: 'Data successfully saved to the database.' });
    } catch (error) {
        // Handle errors
        console.error('Error inserting data into database:', error);
        return handleDatabaseError(res, error);
    }
};
//create resource handler
export const createResourceHandler = async (req, res) => {
    try {
       const schema = req.body.schema; // e.g., "preprimary"
       const table = req.body.table; // e.g., "schemes"
    
       // Use the schema dynamically in the createResource function
       return createResource(req, res, `${schema}.${table}`);
    } catch (error) {
       console.error(`Error creating ${table}:`, error);
       return res.status(500).send({ error: "Internal server error" });
    }
    }

// GET ALL
export const getResources = async (req, res, tableName) => {
    try {
        // Fetch all data from the specified table in the database 912823
        const sql = `SELECT id, form, term, subject, examMS, year, fileExtension, fileName, \`set\`, grade FROM ${tableName}`;
        const result = await pool.query(sql);

        // Check if any data was fetched
        if (result.length === 0) {
            return res.status(404).json({ error: `No resources found in ${tableName}.` });
        }

        // Send success response with fetched data
        return res.status(200).json(result[0]);
    } catch (error) {
        // Handle database error
        console.error(`Error fetching resources from ${tableName} in database:`, error);
        return handleDatabaseError(res, error);
    }
};
//GET BY YEAR
export const getResourcesByYear = async (req, res, tableName) => {
    const year = req.params.year; // Define year here so it's in scope for both try and catch blocks

    try {
        const sql = `SELECT id, form, term, subject, examMS, year, fileExtension, fileName, \`set\`, grade FROM ${tableName} WHERE year = ?`;
        const results = await pool.query(sql, [year]);

        if (results.length === 0) {
            return res.status(404).json({ error: `No resources found for year ${year} in ${tableName}.` });
        }

        return res.status(200).json(results[0]);
    } catch (error) {
        console.error(`Error fetching resources from ${tableName} for year ${year} in database:`, error);
        return handleDatabaseError(res, error);
    }
};

// GET BY FORM
export const getResourcesByForm = async (req, res, tableName) => {
    const form = req.params.form;

    try {
        const sql = `SELECT id, form, term, subject, examMS, year, fileExtension, fileName, \`set\`, grade FROM ${tableName} WHERE form = ?`;
        const [results] = await pool.query(sql, [form]);

        if (results.length === 0) {
            return res.status(404).json({ error: `No resources found for form ${form} in ${tableName}.` });
        }

        return res.status(200).json(results[0]);
    } catch (error) {
        console.error(`Error fetching resources from ${tableName} for form ${form} in database:`, error);
        return handleDatabaseError(res, error);
    }
};


//GET BY ID
export const getFilebyID = async (req, res, tableName) => {
    try {
        // Construct the SQL query
        const sql = `SELECT file, fileName, fileExtension FROM ${tableName} WHERE id = ?`;
        
        // Extract the ID from the request parameters
        const id = req.params.id;
        
        // Execute the SQL query
        const results = await pool.query(sql, [id]);

        // Check if the query returned any rows
        if (results.length === 0) {
            // If no rows were found, return a 404 response
            return res.status(404).json({ error: "Resource not found." });
        }
        
        // Access the file data, fileName, and fileExtension
        const fileData = results[0][0];
        const file = fileData.file;
        const fileName = fileData.fileName;
        const fileExtension = fileData.fileExtension;

        // Log fileData and fileName
        console.log("File Data:", fileData);
        console.log("File Name:", fileName);

        // Set the appropriate Content-Type header based on the file extension
        let contentType;
        switch (fileExtension) {
            case 'pdf':
                contentType = 'application/pdf';
                break;
            case 'docx':
                contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            default:
                contentType = 'application/octet-stream'; // Default to octet-stream for unknown file types
        }

        // Set the Content-Disposition header to trigger file download
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        
        // Set the Content-Type header
        res.setHeader('Content-Type', contentType);

        // Send the file data as the response
        res.send(file);

    } catch (error) {
        // Handle database errors
        console.error("Error fetching resource from database:", error);
        return res.status(500).json({ error: "Internal server error." });
    }
};








//DELETE ALL
export const deleteAllResources = async (req, res, tableName) => {
    try {
        // Delete all data from the database table
        const sql = `DELETE FROM ${tableName}`;
        const result = await pool.query(sql);

        // Log success message
        console.log("All resources successfully deleted from the database.");

        // Send success response
        return res.status(200).json({ message: "All resources successfully deleted from the database." });
    } catch (error) {
        // Handle database error
        console.error("Error deleting all resources from database:", error);
        return handleDatabaseError(res, error);
    }
};

//DELETE BY ID
export const deleteResource = async (req, res, tableName) => {
    const resourceId = req.params.id; // Assuming the ID of the resource to be deleted is passed in the request parameters

    try {
        // Delete data from the database
        const sql = `DELETE FROM ${tableName} WHERE id = ?`;
        const result = await pool.query(sql, [resourceId]);

        if (result.affectedRows === 0) {
            // If no rows were affected, it means the resource with the given ID was not found
            return res.status(404).json({ error: "Resource not found." });
        }

        // Log success message
        console.log("Resource successfully deleted from the database.");

        // Send success response
        return res.status(200).json({ message: "Resource successfully deleted from the database." });
    } catch (error) {
        // Handle database error
        console.error("Error deleting resource from database:", error);
        return handleDatabaseError(res, error);
    }
};

// UPDATE BY ID
export const updateResourceById = async (req, res, tableName) => {
    const resourceId = req.params.id; // Assuming the ID of the resource to be updated is passed in the request parameters
    const updatedData = req.body; // Assuming updated data is sent in the request body
    console.log(updatedData)
    try {
        // Update data in the database    

        const sql = `UPDATE ${tableName} SET ? WHERE id = ?`;
        const result = await pool.query(sql, [updatedData, resourceId]);

        if (result.affectedRows === 0) {
            // If no rows were affected, it means the resource with the given ID was not found
            return res.status(404).json({ error: "Resource not found." });
        }

        // Log success message
        console.log("Resource successfully updated in the database.");

        // Send success response
        return res.status(200).json({ message: "Resource successfully updated in the database." });
    } catch (error) {
        // Handle database error
        console.error("Error updating resource in database:", error);
        return handleDatabaseError(res, error);
    }
};
