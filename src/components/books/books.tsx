import React from 'react';
import styles from './books.module.scss';
import BookImage from '../../images/Book (1).svg';

interface DataBooks {
    name: string,
    author: string,
    pages: number,
    editor: string,
    date: string,
}

interface BookProps {
    data: DataBooks,
    onClick?: () => void,
}

export default function Book({ data, onClick }: BookProps){
    return (
        
        <div className={styles.container} onClick={onClick}>
            <img src={BookImage} alt="" />
            <div className={styles.info}>
                <div className={styles.info_top}>
                    <p>{data.name}</p>
                    <p>{data.author}</p>
                </div>
                <div className={styles.info_bottom}>
                    <p>{data.pages + ' Páginas'}</p>
                    <p>{data.editor}</p>
                    <p>{data.date}</p>
                </div>
            </div>
        </div>
        
    );
}