import React from 'react'
import './style.css'
import AddBook from '../AddBook/AddBook'
import AllBooks from '../AllBooks/AllBooks'

function Home() {
    return (
        <>
            <div className='dark' >
                <h1 className='text-center mt-5 text-decoration-underline'>Book shelf</h1>

                <div className='container w-80 border border-white shadow mt-5 p-sm-2 p-md-4 '>
                    <div className='text-end mt-4'> <AddBook /></div>
                    <div>
                        <AllBooks />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home