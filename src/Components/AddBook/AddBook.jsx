import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBook } from '../../Redux/Slice/BookSlice';

function AddBook() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const dispatch = useDispatch()

    // const book = useSelector((state) => state.BookSlice.books)

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
                        <Form.Control type="text" placeholder="1" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingName" label="Name" className="mb-3"  >
                        <Form.Control type="text" placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Comments"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Book description" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">Add Book</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddBook