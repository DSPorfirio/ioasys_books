import React from 'react';
import styles from './index.module.scss';
import { BooksPropsApi } from '../../pages/home';

interface BookProps {
    data: BooksPropsApi,
    onClick?: () => void,
}

export default function Book({ data, onClick }: BookProps){
    return (
        <div className={styles.container} onClick={onClick}>
            <img src={data.imageUrl} alt="" />
            <div className={styles.info}>
                <div className={styles.info_top}>
                    <p>{data.title}</p>
                    {data.authors && data.authors.map((data, key = 0) => {
                        key++;
                        return <p key={key}>{ data }</p>;
                    })}
                    
                </div>
                <div className={styles.info_bottom}>
                    <p>{data.pageCount + ' Páginas'}</p>
                    <p>{data.publisher}</p>
                    <p>{data.published}</p>
                </div>
            </div>
        </div>
    );
}