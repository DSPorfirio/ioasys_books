import React from 'react';
import styles from './index.module.scss';

interface MiniAlertProps {
    status: 'sucess' | 'error',
    text: string,
}

export const MiniAlert = ({ status, text }: MiniAlertProps) => {
    return(
        <div className={styles.container}>
            <div className={styles.box}></div>
            <p className={status == 'sucess' ? styles.sucess : styles.error}>{text}</p>
        </div>
    );
};