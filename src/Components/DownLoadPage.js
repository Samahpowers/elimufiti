import React from "react";
import { useLocation } from "react-router-dom";

const DownLoadPage = () => {
    const location = useLocation();
    const selectedItem = location.state;
    console.log(selectedItem)
    // Check if selectedItem is null before accessing its properties
    if (!selectedItem) {
        return <div>No item selected</div>;
    }

    return (
        <div>
            <h1>Download Page</h1>
            <h1>Download Page</h1>
            <p>Selected Item Label: {selectedItem.label}</p>
        </div>
    );
};

export default DownLoadPage;
