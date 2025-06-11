import React, { useState } from 'react'
import Navbar from './Navbar'

const Multiplication = () => {
const[input,setInput]=useState(
    {num1:0,num2:0}
)
const[result,setResult]=useState(0)
const inputHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}
const readValue=()=>{
    let mult = parseInt(input.num1) * parseInt(input.num2)
    setResult(mult)
}
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="ro g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Number 1</label>
                        <input name='num1' value={input.num1} onChange={inputHandler} type="text" className="form-control" placeholder='Enter a number' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Number 2</label>
                        <input name='num2' value={input.num2} onChange={inputHandler} type="text" className="form-control" placeholder='Enter a number' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-warning">Multiply</button>
                    </div>
                    <div>
                        <h1><p className='text-warning'>{result}</p></h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Multiplication
