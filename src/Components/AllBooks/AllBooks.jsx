import React, { useEffect } from 'react';
import './style.css';
import { useSelector } from 'react-redux';

function AllBooks() {
    const books = useSelector((state) => state.books);
    
    useEffect(() => {
    }, [books]);
    console.log(books , 'all books');

    return (
        <div className="container py-5">

            <div>
                <div className="row mb-4">
                    <div className="col-lg-5">
                        <h2 className="display-4 font-weight-light">Your Books</h2>
                    </div>
                </div>
                <div className="row text-center">
                    {books && books.map((item)=>(

                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-dark rounded shadow-sm py-5 px-4 border border-white">
                            <h5 className="mb-0">book.bookName</h5>
                            <span className="small text-uppercase text-muted">book.bookDescription</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item">
                                    <button className="social-link btn-danger">
                                        <i className="fa-duotone fa-solid fa-trash" />
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button className="social-link btn-warning">
                                        <i className="fa-duotone fa-solid fa-pen-to-square" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    ))}

                </div>
            </div>

        </div >
    );
}

export default AllBooks;