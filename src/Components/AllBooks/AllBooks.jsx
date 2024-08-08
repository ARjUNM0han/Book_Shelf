import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook,editBook } from '../../Redux/Slice/BookSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function AllBooks() {


    const books = useSelector((state) => state.BookSlice.booklist);

    const [bookData, setBookData] = useState([])
    const [editedBook, setEditedBook] = useState({id:'', bookName: '', bookDescription: '' });
    const dispatch = useDispatch()
    useEffect(() => {
        setBookData(books)
    }, [books]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setEditedBook({ id: item.id, bookName: item.bookName, bookDescription: item.bookDescription });
        setShow(true);
    };


    const handleEdit = () => {
        // console.log(editedBook)
        dispatch(editBook({ id: editedBook.id, updatedData: editedBook}))
        setEditedBook({ id:'', bookName: '', bookDescription: '' })
        handleClose()
    }
    return (
        <>
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
                                                <button className="social-link btn-warning" onClick={() => { handleShow(item) }}>
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


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type='hidden' value={editedBook.id}></Form.Control> 
                    <FloatingLabel controlId="floatingName" label="Name" className="mb-3"  >
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={editedBook.bookName}
                            onChange={(e) => setEditedBook({ ...editedBook, bookName: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Book Description"
                        className="mb-3"
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Book description"
                            value={editedBook.bookDescription}
                            onChange={(e) => setEditedBook({ ...editedBook, bookDescription: e.target.value })} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success"onClick={handleEdit} >Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AllBooks;