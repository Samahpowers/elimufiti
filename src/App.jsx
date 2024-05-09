import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

import DownloadPage from './Components/DownLoadPage';
import Support from './Components/Support';

function App() {
    const [isAdmin, setIsAdmin] = useState(true); // Initialize isAdmin state
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home 
                                        isAdmin={isAdmin}
                                        isLoggedIn={isLoggedIn}/>} />
                <Route path='/login' element={<Login 
                                                isAdmin={isAdmin}
                                                isLoggedIn={isLoggedIn}/>} />
                <Route path='/signup' element={<Signup 
                                                isAdmin={isAdmin}
                                                isLoggedIn={isLoggedIn}/>} />                 
                <Route path='/download' element={<DownloadPage />} />
                <Route path='/support/upload/resources' element={<Support 
                                                                        isAdmin={isAdmin}
                                                                        isLoggedIn={isLoggedIn}/>} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
