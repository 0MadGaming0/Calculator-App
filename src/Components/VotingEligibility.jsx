import React, { useState } from 'react'
import Navbar from './Navbar'

const VotingEligibility = () => {
const[input,setInput]=useState(
    {age:0}
)
const[result,setResult]=useState(0)
const inputHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
}
const readValue=()=>{
    let age= parseInt(input.age)
    if (age>=18) {
        setResult("Eligible")
    }
    else
    {
        setResult("Not Eligible")
    }
}
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Age</label>
                        <input name='age' value={input.age} onChange={inputHandler} type="text" className="form-control" placeholder='Enter your age' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-dark">Check Eligibility</button>
                    </div>
                    <div>
                        <h1><p className='text-dark'>{result}</p></h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VotingEligibility
