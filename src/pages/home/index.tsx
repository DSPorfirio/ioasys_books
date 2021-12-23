import React, { useEffect, useState, useCallback } from 'react';
import styles from './index.module.scss';
import Logo from '../../images/Logo_ioasys.svg';
import Logout from '../../images/Logout.svg';
import Search from '../../images/Search.svg';
import Filters from '../../images/Filters.svg';
import Book from '../../components/books';
import FilterBook from '../../components/modals/filterBooks';
import { Details } from '../../components/modals/details';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

export interface BooksPropsApi {
    authors: [string],
    title: string,
    description: string,
    pageCount: number,
    category: string,
    imageUrl: string,
    language: string,
    isbn10: string,
    isbn13: string,
    publisher: string,
    published: number,
    id: string,
}

interface ApiProps {
    data: BooksPropsApi[],
    page: number,
    totalItems: number,
    totalPages: number,
}

export interface DetailsPropsApi {
    id: string,
    title: string,
    description: string,
    authors: [string],
    pageCount: number,
    category: string,
    imageUrl: string,
    isbn10: string,
    isbn13: string,
    language: string,
    publisher: string,
    published: number
}

export const Home = () => {
    const  { getAuth } = useAuth();
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [booksApiProps, setBooksApiProps] = useState<BooksPropsApi[]>();
    const [isLoadingBooks, setIsLoadingBooks] = useState<boolean>(true);
    const [isLoadingDetails, setIsLoadingDetails] = useState<boolean>(false);
    const [detailsBook, setDetailsBook] = useState<DetailsPropsApi>();

    const getBooks = useCallback(() => {
        setIsLoadingBooks(true);
        api.get('/books', {
            headers: {
                Authorization: 'Bearer|' + getAuth()
            },
            params: {
                page: 1,
                amount: 15,
            }
        }).then((response) => {
            setBooksApiProps(response.data.data);
            setIsLoadingBooks(false);
        }).catch((error) => {
            console.log(error);
            setIsLoadingBooks(false);
        });
    }, []);

    const getBookDetails = useCallback((id_book: string) => {
        setIsLoadingDetails(true);
        api.get(`/books/${id_book}`, {
            headers: {
                Authorization: 'Bearer|' + getAuth()
            }
        }).then((response) => {
            setDetailsBook(response.data);
            setIsLoadingDetails(false);
        }).catch((error) => {
            console.log(error);
            setIsLoadingDetails(false);
        });
    }, []);

    function displayFilterBook(): void {
        setOpenFilter(!openFilter);
    }

    function displayDetailsBook(): void {
        setOpenDetails(!openDetails);
    }

    useEffect(() => {
        getBooks();
    }, []);

    if(isLoadingBooks) {
        return <h1>Animação carregando</h1>;
    }

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
                {booksApiProps && booksApiProps.map((data) => {
                    return <Book data={data} key={data.id} onClick={() => {
                        displayDetailsBook();
                        getBookDetails(data.id);
                    }} />;
                })}
            </div>
            {openFilter && <FilterBook displayFilter={displayFilterBook} />}
            {openDetails && <Details data={detailsBook} loading={isLoadingDetails} displayDetails={displayDetailsBook} />}
        </div>
    );
};