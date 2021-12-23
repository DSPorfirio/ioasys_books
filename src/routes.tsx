import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login/index';
import { Home } from './pages/home/index';
import { AuthProvider } from './contexts/auth';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};
