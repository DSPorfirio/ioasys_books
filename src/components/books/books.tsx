import React from 'react';
import styles from './books.module.scss';
import BookImage from '../../images/Book (1).svg';

interface BookProps {
    name: string,
    author: string,
    pages: number,
    editor: string,
    date: string
}

export default function Book(){

    const data_book : BookProps = {
        name: 'Nome do livro',
        author: 'Autor do livro',
        pages: 22,
        editor: 'Editora',
        date: 'Data de lançamento'
    };

    return (
        <div className={styles.container}>
            <img src={BookImage} alt="" />
            <div className={styles.info}>
                <div className={styles.info_top}>
                    <p>{data_book.name}</p>
                    <p>{data_book.author}</p>
                </div>
                <div className={styles.info_bottom}>
                    <p>{data_book.pages + ' Páginas'}</p>
                    <p>{data_book.editor}</p>
                    <p>{data_book.date}</p>
                </div>
            </div>
        </div>
    );
}