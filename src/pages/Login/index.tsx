import React from 'react';
import styles from './index.module.scss';
import Logo from '../../images/Logo_ioasys.svg';

export const Login = () => {

    function submitFormLogin(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
    }
    
    return (
        <div className={styles.container}>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitFormLogin(e)}>
                <div className={styles.header}>
                    <img src={Logo} alt="Ioasys" />
                    <p>Books</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.email}>
                        <label htmlFor="email">
                            <span>Email</span>
                            <input type="email" name="email" />
                        </label>
                    </div>
                    <div className={styles.password}>
                        <label htmlFor="password">
                            <div className={styles.content_password}>
                                <span>Senha</span>
                                <input type="password" name="password" />
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