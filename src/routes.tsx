import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login/index';
import { Home } from './pages/home/index';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
