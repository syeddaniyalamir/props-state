
import React from 'react'

const Project = ({back,count,increase,decrease,reset,name,changename,oldname}) => {
  return (
<div className="container text-center mt-5 w-50">
    <h3>Start Counting</h3>
    <h1 className='fw-bold'>{count}</h1>
    <div className="row">
        <div className="col-6 mt-2">
            <button onClick={increase} className='btn btn-success w-100'>Increase</button>
        </div>
        <div className="col-6 mt-2">
            <button onClick={decrease} className='btn btn-danger w-100'>Decrease</button>
        </div>
    </div>
        <button onClick={reset} className='btn btn-secondary w-100 mt-3' >Reset</button>
        <hr />
        <h1 className='fw-bold'>{name}</h1>
        <div className="row">
            <div className="col-6 mt-2">
        <button onClick={changename} className='btn btn-success w-100'>Change Name</button>
            </div>
             <div className="col-6 mt-2">
        <button onClick={oldname} className='btn btn-danger w-100'>Undo</button>
            </div>
        </div>
        <hr />
        <button className='btn btn-secondary btn-sm w-50 mt-5' onClick={back}>Home</button>
</div>

  )
}

export default Project
