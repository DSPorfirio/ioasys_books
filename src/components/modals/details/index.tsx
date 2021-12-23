import React from 'react';
import styles from './index.module.scss';
import Close_icon from '../../../images/Close_icon.svg';
import Book from '../../../images/Book (1).svg';
import { DetailsPropsApi } from '../../../pages/home';

interface DetailsProps {
    data: DetailsPropsApi | undefined,
    loading: boolean,
    displayDetails: () => void,
}

export const Details = ({ data, loading, displayDetails }: DetailsProps) => {

    if(loading) {
        return <h1>Animação carregando</h1>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.close}>
                <button onClick={displayDetails}>
                    <img src={Close_icon} alt="Fechar detalhes" />
                </button>
            </div>
            <div className={styles.content}>
                <div className={styles.book}>
                    <img src={data?.imageUrl} alt="Livro" />
                </div>
                <div className={styles.content_info}>
                    <div className={styles.title}>
                        <p>{data?.title}</p>
                        {data?.authors && data.authors.map((data, key = 0) => {
                            key++;
                            return <p key={key}>{ data }</p>;
                        })}
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>
                            <p>Informações</p>
                        </div>
                        <div>
                            <p>Páginas</p>
                            <p>{data?.pageCount + ' Páginas'}</p>
                        </div>
                        <div>
                            <p>Editora</p>
                            <p>{data?.publisher}</p>
                        </div>
                        <div>
                            <p>Publicação</p>
                            <p>{data?.published}</p>
                        </div>
                        <div>
                            <p>Idioma</p>
                            <p>{data?.language}</p>
                        </div>
                        <div>
                            <p>Título original</p>
                            <p>{data?.title}</p>
                        </div>
                        <div>
                            <p>ISBN-10</p>
                            <p>{data?.isbn10}</p>
                        </div>
                        <div>
                            <p>ISBN-13</p>
                            <p>{data?.isbn13}</p>
                        </div>
                    </div>
                    <div className={styles.review}>
                        <div className={styles.review_title}>
                            <p>Resenha da editora</p>
                        </div>
                        <div className={styles.review_content}>
                            {data?.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};