import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { prePrimaryItems, primaryItems,schoolTittles,secondaryItems, jssItems } from "./PrePrimaryItems";
import DynamicComponent from "./DynamicComponent";

const ResourceLinks = ({isAdmin, isLoggedIn}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isListHidden, setIsListHidden] = useState(false);
    const [isDynamicComponentHidden, setIsDynamicComponentHidden] = useState(false);
    const [tittle, setTittle] = useState(true)
    
    const navigate = useNavigate();

    const fetchData = async (path, value) => {
        try {
                                        //http://localhost:8000/pre/primary/schemes route=> get("/schemes",  getSchemes)
            const res = await axios.get(`http://localhost:8000/${path}/${value}`);
            console.log(path)
            setData(res.data);
        } catch (err) {
            setError("Could not fetch data");
        }
    };

    useEffect(() => {
        if (selectedItem) {
            fetchData(selectedItem.path, selectedItem.value); //the selectedItem.value is coming from an array in preprimaryItems.js
        }
    }, [selectedItem]);

    const handleClickPre = async (value) => {
        const selectedItem = prePrimaryItems.find(prePrimaryItem => prePrimaryItem.value === value);
        if (selectedItem) {
            setSelectedItem(selectedItem);
            setIsListHidden(true); // Hide the list
            setTittle(false)
            //navigate("download");
        }
    };
    const handleClickPrimary = async (value) => {
        const selectedItem = primaryItems.find(primaryItem => primaryItem.value === value);
        if (selectedItem) {
            setSelectedItem(selectedItem);
            setIsListHidden(true); // Hide the list
            setTittle(false)
            //navigate("download");
        }
    };
    const handleClickjss = async (value) => {
        const selectedItem = jssItems.find(jssItem => jssItem.value === value);
        if (selectedItem) {           
            setSelectedItem(selectedItem);
            setIsListHidden(true); // Hide the list
            setTittle(false)
            //navigate("download");
        }
    };
    const handleClicksec = async (value) => {
        const selectedItem = secondaryItems.find(secondaryItem => secondaryItem.value === value);
        if (selectedItem) {
            setSelectedItem(selectedItem);
            setIsListHidden(true); // Hide the list
            setTittle(false)
            //navigate("download");
        }
    };
   
    const handleBackClick = () => {
        setIsDynamicComponentHidden(false); // Show the DynamicComponent
        setIsListHidden(false); // Show the list
        setSelectedItem(null);
        setTittle(true)
    };                                             //http://localhost:8000/jss/get/schemes/file/10
            
                 //Downloading                               //http://localhost:8000/primary/schemes/download/1
                 const handleDownloadExam = async (path, id, category, fileName) => {
                    try {
                        const response = await axios.get(`http://localhost:8000/${path}/${category}/file/${id}`, {
                            responseType: 'blob'
                        });
                        
                        const blob = new Blob([response.data], { type: response.headers['content-type'] });
                        const url = window.URL.createObjectURL(blob);
                      //console.log("YOUR FILE NAME IS:",fileName)

                        const link = document.createElement('a');
                        link.href = url;
                
                        // Use only the fileName for the download filename
                        link.download = fileName;
                
                        document.body.appendChild(link);
                        link.click();
                
                        window.URL.revokeObjectURL(url);
                        link.remove();
                    } catch (error) {
                        console.error('Error downloading exam:', error);
                    }
                };
                
                
        //Deleting  http://localhost:8000/jss/delete/schemes/34
        const handleDelete = async (path, id, category) => {
            try {
                // Send a DELETE request to your server to delete the item
                await axios.delete(`http://localhost:8000/${path}/delete${category}/${id}`);
                
                // If the request is successful, you may want to update your UI or perform any necessary actions
                setData(prevData => prevData.filter(item => item.id !== id));
                console.log('Item deleted successfully.');
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        };
        
    return (
        <div className="container-fluid bg-dark text-white">
            <section className="py-4" style={{ backgroundColor: 'transparent', color: 'white' }}>
            {selectedItem && (
                <div className="position-fixed bottom-0 start-0 mb-3 ms-3">
                    <h6 onClick={handleBackClick} style={{ cursor: 'pointer' }}><i class="fa-solid fa-arrow-left"></i></h6>
                </div>
            )}
                    
                <div>       
                    <header className="h4" style={{ backgroundColor: 'transparent', color: 'white' }}>{tittle && schoolTittles.prePrimary}</header>
                        <ul className={`list-group pt-4 pb-4 bg-transparent border-0 ${isListHidden ? 'd-none' : ''}`}>
                            {prePrimaryItems.map((prePrimaryItem, index) => (
                                <li key={index} className="list-group-item border-0 text-white cursor-pointer"  style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <a href="#" className="text-white "
                                    onClick={() => handleClickPre(prePrimaryItem.value)} 
                                    style={{ width: 'fit-content', color: 'white' }}>
                                    {prePrimaryItem.label}
                                    </a>
                                    <div className='pt-2 d-none'
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleDelete}>
                                        <i className="fas fa-trash height-auto"></i>                                        
                                    </div>
                                </li>
                            ))}
                        </ul>
                </div>

                <div className="bg-white text-black">
                    <header className="h4" style={{ backgroundColor: 'transparent', color: 'black' }}>{tittle && schoolTittles.primary}</header>
                        <ul className={`list-group pt-4 pb-4 px-0 mx-0 bg-white border-0 rounded-0 ${isListHidden ? 'd-none' : ''}`}>
                            {primaryItems.map((primaryItem, index) => (
                                <li key={index} className="list-group-item border-0 text-black cursor-pointer"  style={{ backgroundColor: 'transparent', color: 'black' }}>
                                    <a href="#" className="text-black "
                                    onClick={() => handleClickPrimary(primaryItem.value)} 
                                    style={{ width: 'fit-content', color: 'black' }}>
                                    {primaryItem.label}
                                    </a>
                                    <div className='pt-2 d-none'
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleDelete}>
                                        <i className="fas fa-trash height-auto"></i>                                        
                                    </div>
                                </li>
                            ))}
                        </ul>
                </div>

                <div >
                    <header className="h4" style={{ backgroundColor: 'transparent', color: 'white' }}>{tittle && schoolTittles.jss}</header>
                    <ul className={`list-group pt-4 pb-4 px-0 mx-0 bg-dark border-0 rounded-0 ${isListHidden ? 'd-none' : ''}`}>
                        {jssItems.map((jssItem, index) => (
                        <li key={index} className="list-group-item border-0 text-white cursor-pointer"  style={{ backgroundColor: 'transparent', color: 'white' }}>
                            <a href="#" className="text-white "
                                onClick={() => handleClickjss(jssItem.value)} 
                                style={{ width: 'fit-content', color: 'black' }}>
                                {jssItem.label}
                            </a>
                            <div className='pt-2 d-none'
                                style={{ cursor: 'pointer' }}
                                onClick={handleDelete}>
                                <i className="fas fa-trash height-auto"></i>                                        
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white text-black">
                    <header className="h4" style={{ backgroundColor: 'transparent', color: 'black' }}>{tittle && schoolTittles.secondary}</header>
                        <ul className={`list-group pt-4 pb-4 bg-transparent border-0 ${isListHidden ? 'd-none' : ''}`}>
                            {secondaryItems.map((secondaryItem, index) => (
                                <li key={index} className="list-group-item border-0 text-white cursor-pointer"  style={{ backgroundColor: 'transparent', color: 'black' }}>
                                    <a href="#" className="text-black  "
                                    onClick={() => handleClicksec(secondaryItem.value)} 
                                    style={{ width: 'fit-content', color: 'white' }}>
                                    {secondaryItem.label}
                                    </a>
                                    <div className='pt-2 d-none'
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleDelete}>
                                        <i className="fas fa-trash height-auto"></i>                                        
                                    </div>
                                </li>
                            ))}
                        </ul>
                </div>
            </section>

            {!isDynamicComponentHidden && selectedItem && (
                <DynamicComponent
                    selectedItem={selectedItem}
                    data={data}
                    error={error}
                    handleDownloadExam={handleDownloadExam}
                    handleDelete={handleDelete}
                    isAdmin={isAdmin}
                    isLoggedIn={isLoggedIn} // Pass the isAdmin state
                />
            )}
        </div>
    );
};

export default ResourceLinks;
