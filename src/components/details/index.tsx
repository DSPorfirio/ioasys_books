import React from 'react';
import styles from './index.module.scss';
import Close_icon from '../../images/Close_icon.svg';
import Book from '../../images/Book (1).svg';

interface DetailsProps {
    displayDetails: () => void
}

export const Details = ({ displayDetails }: DetailsProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.close}>
                <button onClick={displayDetails}>
                    <img src={Close_icon} alt="Fechar detalhes" />
                </button>
            </div>
            <div className={styles.content}>
                <div className={styles.book}>
                    <img src={Book} alt="Livro" />
                </div>
                <div className={styles.title}>
                    <p>Title</p>
                    <p>Authors</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.info_title}>
                        <p>Informações</p>
                    </div>
                    <div>
                        <p>Páginas</p>
                        <p>304 Páginas</p>
                    </div>
                    <div>
                        <p>Editora</p>
                        <p>Editora Loyola</p>
                    </div>
                    <div>
                        <p>Publicação</p>
                        <p>2020</p>
                    </div>
                    <div>
                        <p>Idioma</p>
                        <p>Inglês</p>
                    </div>
                    <div>
                        <p>Título original</p>
                        <p>Título original</p>
                    </div>
                    <div>
                        <p>ISBN-10</p>
                        <p>ISBN-10</p>
                    </div>
                    <div>
                        <p>ISBN-13</p>
                        <p>ISBN-13</p>
                    </div>
                </div>
                <div className={styles.review}>
                    <div className={styles.review_title}>
                        <p>Resenha da editora</p>
                    </div>
                    <div className={styles.review_content}>
                        The subject of “design thinking” is the rage at business schools, 
                        throughout corporations, and increasingly in the popular press—due in large 
                        part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, 
                        who uses this book to show how the techniques and strategies of design belong at every 
                        level of business.
                    </div>
                </div>
            </div>
        </div>
    );
};