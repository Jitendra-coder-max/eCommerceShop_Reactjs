import React from 'react'
import './Mysignup.css'

function Signup() {
  return (
    <>
    <div className="signupFrm">
    <form action="" className="form">
      <h1 className="title">Sign up</h1>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a" />
        <label htmlFor="" className="label">Email</label>
      </div>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a" />
        <label htmlFor="" className="label">Username</label>
      </div>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a" />
        <label htmlFor="" className="label">Password</label>
      </div>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a" />
        <label htmlFor="" className="label">Confirm Password</label>
      </div>

      <input type="submit" className="submitBtn" value="Sign up" onClick={()=>{alert("SuccessFully u SignedUp")}} />
    </form>
  </div>

    
    
    </>
  )
}

export default Signup;