import React, { FormEvent, useState } from 'react';
import styles from './index.module.scss';
import Logo from '../../images/Logo_ioasys.svg';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
    const { handleLogin } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function submitFormLogin(e: FormEvent): void {
        e.preventDefault();
        handleLogin(email, password);
    }
    
    return (
        <div className={styles.container}>
            <form onSubmit={(e: FormEvent) => submitFormLogin(e)}>
                <div className={styles.header}>
                    <img src={Logo} alt="Ioasys" />
                    <p>Books</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.email}>
                        <label htmlFor="email">
                            <span>Email</span>
                            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className={styles.password}>
                        <label htmlFor="password">
                            <div className={styles.content_password}>
                                <span>Senha</span>
                                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className={styles.div_button}>
                                <button type='submit'>Entrar</button>
                            </div>
                        </label>
                    </div> 
                </div>
            </form>
        </div>
    );
    
};