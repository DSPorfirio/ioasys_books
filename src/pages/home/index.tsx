import React, { useState } from 'react';
import styles from './index.module.scss';
import Logo from '../../images/Logo_ioasys.svg';
import Logout from '../../images/Logout.svg';
import Search from '../../images/Search.svg';
import Filters from '../../images/Filters.svg';
import Book from '../../components/books/books';
import FilterBook from '../../components/filterBooks/filter';
import { Details } from '../../components/details';

export const Home = () => {
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [openDetails, setOpenDetails] = useState<boolean>(false);

    function displayFilterBook(): void {
        setOpenFilter(!openFilter);
    }

    function displayDetailsBook(): void {
        setOpenDetails(!openDetails);
    }

    const data_book  = {
        name: 'Nome do livro',
        author: 'Autor do livro',
        pages: 22,
        editor: 'Editora',
        date: 'Data de lançamento'
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Ioasys" />
                    <p>Books</p>
                </div>
                <button>
                    <img src={Logout} alt="Sair do app" />
                </button>
            </div>
            <div className={styles.filters}>
                <div className={styles.search}>
                    <input type="text" placeholder="Procure um livro" alt="Pesquise um livro" />
                    <img src={Search} alt="Pesquisar" />
                </div>
                <div className={styles.filter_select}>
                    <img src={Filters} alt="Filtrar livros" onClick={displayFilterBook} />
                </div>
            </div>
            <div className={styles.books}>
                <Book data={data_book} onClick={displayDetailsBook} />
                <Book data={data_book} onClick={displayDetailsBook} />
                <Book data={data_book} onClick={displayDetailsBook} />
            </div>
            {openFilter ? <FilterBook displayFilter={displayFilterBook} /> : ''}
            {openDetails ? (<Details displayDetails={displayDetailsBook} />) : ''}
        </div>
    );
};