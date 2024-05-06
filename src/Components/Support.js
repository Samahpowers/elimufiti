import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { prePrimaryItems, primaryItems, jssItems, secondaryItems } from './PrePrimaryItems.js';

const Support = () => {
    const [values, setValues] = useState({
        grade: "",
        examMS: "",
        term: "",
        subject: "",
        year: "",
        file: null
    });
    const [path, setPath] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [items, setItems] = useState(null);
    const allowedExtensions = ['.docx', '.pdf', '.txt'];

    useEffect(() => {
        console.log("values:", values);
        console.log("path:", path);
        console.log("category:", category);
        console.log("loading:", loading);
        console.log("errorMessage:", errorMessage);
        console.log("successMessage:", successMessage);
        console.log("showForm:", showForm);
        console.log("items:", items);
    }, [values, path, category, loading, errorMessage, successMessage, showForm, items]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const fileName = file.name;
        const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
        if (!allowedExtensions.includes(fileExtension)) {
            console.error("Invalid file extension.");
            return;
        }
        setValues(prev => ({ ...prev, file }));
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setCategory(category);
    };

    const handleClick = (e) => {
        const path = e.target.getAttribute("name");
        setPath(path);
        setShowForm(true);

        switch (path) {
            case "pre/primary":
                setItems(prePrimaryItems);
                break;
            case "primary":
                setItems(primaryItems);
                break;
            case "jss":
                setItems(jssItems);
                break;
            case "secondary":
                setItems(secondaryItems);
                break;
            default:
                setItems(null);
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const formData = new FormData();
        formData.append('grade', values.grade);
        formData.append('examMS', values.examMS);
        formData.append('term', values.term);
        formData.append('subject', values.subject);
        formData.append('file', values.file);
        formData.append('year', values.year);

        try {
            const response = await axios.post(`http://localhost:8000/${path}/${category}`, formData);
            setSuccessMessage(response.data.message);
            setValues({
                grade: "",
                examMS: "",
                term: "",
                subject: "",
                year: "",
                file: null
            });
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage("An error occurred while submitting the form. Please try again later.");
        } finally {
            setLoading(false);
            setTimeout(() => {
                setErrorMessage("");
            }, 5000);
        }
    };

    return (
        <div className="row bgs">
            <ul className="col-lg-12 d-flex flex-row justify-content-around list-group-flush py-3 bg-primary" style={{ color: 'white' }}>
                <li className="list-group-item"><p><img src='../logo192.PNG' alt='logo' width="40px" height="40px" /></p></li>
                <li name="pre/primary" className="list-group-item" style={{ cursor: 'pointer' }} onClick={handleClick}>Pre Primary</li>
                <li name="primary" className="list-group-item" style={{ cursor: 'pointer' }} onClick={handleClick}>Primary</li>
                <li name="jss" className="list-group-item" style={{ cursor: 'pointer' }} onClick={handleClick}>JS</li>
                <li name="secondary" className="list-group-item" style={{ cursor: 'pointer' }} onClick={handleClick}>Secondary</li>
            </ul>
            <div className="d-flex justify-content-center">
                <h4>{path && <h4>{path}</h4>}</h4>
            </div>
            <div className='row'>
                <div>
                    {loading && <div className='loader'></div>}
                </div>
                <div className={`${showForm ? "d-flex justify-content-center" : "d-none"} `}>
                    <select
                        className='custom-select width-fit-content px-5 rounded bg-primary text-white'
                        id="categoryDropdown"
                        name="category"
                        onChange={(e) => handleCategoryChange(e)}
                        value={category ? category : ""}
                    >
                        <option value=""> Select Category</option>
                        <option value="create/schemes">Schemes</option>
                        <option value="create/curriculum/designs">Curriculum Design</option>
                        <option value="create/grade7/exams">Grade 7 Examinations</option>
                        <option value="create/grade8/exams">Grade 8 Examinations</option>
                        <option value="create/fullset/exams">School Fullset Examinations</option>
                        <option value="create/notes"> School Notes</option>
                        <option value="create/holiday/assignments"> School Holiday Assigments</option>
                        <option value="create/play/group/exams">Play Group Exams</option>
                        <option value="create/pp1/Exams">PP1 Exams</option>
                        <option value="create/pp2/Exams">PP2 Exams</option>
                        <option value="create/holiday/assignments">Holiday Assignments</option>
                        <option value="create/assessment/tools">ASSESSMENT TOOLS  </option>
                        <option value="create/more/resources">More Resources</option>
                    </select>
                </div>
                <div className={`d-flex justify-content-center  vh-100 position-relative ${showForm ? "" : "d-none"}`}>
                    <form onSubmit={handleSubmit} className='bg-white'>
                        <div>
                            <label htmlFor="examMS" className="form-label ms-1"><strong>Exam / Marking Scheme</strong></label>
                            <select
                                className="form-select py-0"
                                name="examMS"
                                value={values.examMS}
                                onChange={handleInput}
                            >
                                <option value="">Select Option</option>
                                <option value="Exam">Exam</option>
                                <option value="Marking Scheme">Marking Scheme</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="grade" className="form-label ms-1"><strong>Grade</strong></label>
                            <input type="text" className="form-control py-0" name="grade" placeholder="Enter Grade" value={values.grade} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="term" className="form-label ms-1"><strong>Term</strong></label>
                            <input type="text" className="form-control py-0" name="term" placeholder="Enter Term" value={values.term} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="year" className="form-label ms-1"><strong>Year</strong></label>
                            <input type="text" className="form-control py-0" name="year" placeholder="Enter Year" value={values.year} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="subject" className="form-label ms-1"><strong>Subject</strong></label>
                            <input type="text" className="form-control py-0" name="subject" placeholder="Enter Subject" value={values.subject} onChange={handleInput} />
                        </div>
                        <div>
                            <label htmlFor="file" className="form-label ms-1"><strong>File</strong></label>
                            <input type="file" className="form-control py-0" name="file" onChange={handleFileChange} />
                        </div>
                        <button type="submit" className="btn btn-primary form-control py-0 mt-3" disabled={loading}>Submit</button>
                    </form>
                    <div className="position-absolute top-0 start-50 translate-middle-x">
                        {errorMessage && <p className="alert alert-danger p-2">{errorMessage}</p>}
                        {successMessage && <p className="alert alert-success p-2">{successMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;
