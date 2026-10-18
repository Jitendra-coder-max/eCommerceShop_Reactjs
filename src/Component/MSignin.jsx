import React from 'react';
import './Mysignup.css'

function MSignin() {
  return (
    <>
    
    <div className="signupFrm">
    <form action="" className="form">
      <h1 className="title">Sign In</h1>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a" />
        <label htmlFor="" className="label">Email/Username</label>
      </div>


      <div className="inputContainer">
        <input type="text" className="input" placeholder="a" />
        <label htmlFor="" className="label">Password</label>
      </div>

      

      <input type="submit" className="submitBtn" value="Sign In" onClick={()=>{alert("SuccessFully u SignedIn")}} />
    </form>
  </div>

    
    
    
    
    </>
  )
}

export default MSignin;