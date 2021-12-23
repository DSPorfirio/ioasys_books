import React, { createContext, ReactNode, useState, SetStateAction} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export interface UserProps {
    id_user: string,
    name_user: string,
    birthdate_user: string,
    gender_user: string,
}

export interface  AuthProps {
    authorization: string,
    refresh_token: string,
}

interface AuthContextProps {
    auth: AuthProps,
    userInfo: UserProps,
    handleLogin: (email: string, password: string) => void,
    getAuth: () => string | null,
}

interface AuthProviderProps {
    children: ReactNode,
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children} : AuthProviderProps) => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState<UserProps>({
        id_user: '',
        name_user: '',
        birthdate_user: '',
        gender_user: '',
    });
    
    const [auth, setAuth] = useState<AuthProps>({
        authorization: '', 
        refresh_token: ''
    });

    const getAuth = (): string | null => {
        return localStorage.getItem('authorization');
    };

    const handleLogin = (email: string, password: string): void => {
        api.post('/auth/sign-in', {email, password})
            .then((response) => {
                setUserInfo({
                    id_user: response.data.id ?? '',
                    name_user: response.data.name ?? '',
                    birthdate_user: response.data.birthdate ?? '',
                    gender_user: response.data.gender ?? '', 
                });

                setAuth({
                    authorization: response.headers.authorization ?? '',
                    refresh_token: response.headers.refresh_token ?? '',
                });

                localStorage.setItem('name_user', response.data.name ?? '');
                localStorage.setItem('authorization', response.headers.authorization ?? '');
                
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <AuthContext.Provider value={{
            auth, 
            userInfo,
            handleLogin,
            getAuth,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
