import React from 'react';
import styles from './index.module.scss';
import Logo from '../../images/Logo_ioasys.svg';
import Logout from '../../images/Logout.svg';
import Search from '../../images/Search.svg';
import Filters from '../../images/Filters.svg';
import Book from '../../components/books/books';

export const Home = () => {
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
                    <img src={Filters} alt="Filtrar livros" />
                </div>
            </div>
            <div className={styles.books}>
                <Book />
                <Book />
                <Book />
            </div>
        </div>
    );
};