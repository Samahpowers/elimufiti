import {pool} from "../db.js";

/**
 * Retrieves primary scheme data from the database based on the specified ID.
 * @param {string | number} id - The ID of the primary scheme to retrieve.
 * @returns {Buffer | null} The file data of the primary scheme, or null if no record is found.
 * @throws {Error} If an error occurs during the database query.
 */
export const getPriSchemes = async (id) => {
    try {
        // Validate input
        if (!id || typeof id !== 'string' && typeof id !== 'number') {
            throw new Error("Invalid ID. Please provide a non-empty string or a number.");
        }

        // Execute database query
        const sql = "SELECT file FROM primaryschemes WHERE id = ?";
        const [rows, fields] = await pool.query(sql, [id]);

        // Handle no record found
        if (rows.length === 0) {
            return null;
        }

        // Return file data
        return rows[0].file;
    } catch (error) {
        // Log and throw error for external handling
        console.error("Error fetching primary scheme data from database:", error);
        throw error;
    }
};
