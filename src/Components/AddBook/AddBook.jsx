import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addBook } from '../../Redux/Slice/BookSlice';

function AddBook() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [bookData, setBookData] = useState({
        id: '', bookName: '', bookDescription: ''
    })

    const dispatch = useDispatch()


    const handleAddBook = () => {
        console.log(bookData)
        const { id, bookName, bookDescription } = bookData
        if (!id || !bookName || !bookDescription) {
            alert('enter feilds')
        } else {
            dispatch(addBook(bookData))
            setBookData({ id: '', bookName: '', bookDescription: '' })
            handleClose()
        }
    }

    return (
        <>
            <div>
                <button className='btn btn-light border shadow' onClick={handleShow}>Add new book</button>
            </div>


            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Book ID"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="1" onChange={(e) => { setBookData({ ...bookData, id: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingName" label="Name" className="mb-3"  >
                        <Form.Control type="text" placeholder="Name" onChange={(e) => { setBookData({ ...bookData, bookName: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Book Description"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Book description" onChange={(e) => { setBookData({ ...bookData, bookDescription: e.target.value }) }} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleAddBook}>Add Book</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddBook