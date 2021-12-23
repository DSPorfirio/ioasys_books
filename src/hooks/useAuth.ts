import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

export const useAuth = () => {
    return useContext(AuthContext);
};