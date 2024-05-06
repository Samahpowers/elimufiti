import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import DynamicComponent from './Components/DynamicComponent'; // Import DynamicComponent
import  DownloadPage  from './Components/DownLoadPage';
import Support from './Components/Support';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />                
                <Route path='/:selectedItem' element={<DynamicComponent />} /> {/* Use DynamicComponent */}
                <Route path='/download' element={<DownloadPage />} /> {/* Use DownloadPage */}
                <Route path='/support/upload/resources' element={<Support />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
