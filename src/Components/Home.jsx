
import React from 'react'

const Home = ({next}) => {
  return (
    <>
    <div className="container text-center min-vh-100 d-flex flex-column justify-content-center align-items-center ">
        <h1 className='fw-bold'>TEST YOUR KNOWLEDGE</h1>
    <button className="btn btn-success w-50" onClick={next}>Start</button>
    </div>
    </>
    
)
}

export default Home
