import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../../Redux/Slice/BookSlice';

function AllBooks() {


    const books = useSelector((state) => state.BookSlice.booklist);

    const [bookData, setBookData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        setBookData(books)
    }, [books]);
    console.log(bookData)
    return (
        <div className="container py-5">
            {bookData.length > 0 ?
                <div>
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Your Books</h2>
                        </div>
                    </div>
                    <div className="row text-center">
                        {bookData.map((item) => (
                            <div className="col-xl-3 col-sm-6 mb-5" key={item.id}>
                                <div className="bg-dark rounded shadow-sm py-5 px-4 border border-white">
                                    <h5 className="mb-0">{item.bookName}</h5>
                                    <span className="small text-uppercase text-muted">{item.bookDescription}</span>
                                    <ul className="social mb-0 list-inline mt-3">
                                        <li className="list-inline-item">
                                            <button className="social-link btn-danger" onClick={() => { dispatch(deleteBook(item.id)) }}>
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
                :
                <div className="row mb-4">
                    <div className="col-lg-5">
                        <h2 className="display-4 font-weight-light">Add New Books!!</h2>
                    </div>
                </div>
            }

        </div >
    );
}

export default AllBooks;