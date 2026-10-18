import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector} from "react-redux";

function Navbaar() {
  const state = useSelector((state)=> state.handleCart);
  return (
   <>
   
   <nav className="navbar navbar-expand-lg bg-light">
   <div className="container">
     <Link className="navbar-brand" to="/">Home</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        {/*<li className="nav-item">
           <a className="nav-link" href="#">womens</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">mens</a>
  </li> */}
       </ul>

       <div className="buttons">
         <Link to="/signin" className="btn btn-outline-dark me-1 ms-2" ><i className="fa fa-sign-in">Sign In</i></Link>
       </div>
       <div className="buttons">
         <Link to="/signup" className="btn btn-outline-dark me-1 ms-2"><i className="fa fa-sign-in">sign up</i></Link>
       </div>
       <div className="buttons">
         <Link to="/cart" className="btn btn-outline-dark me-1 ms-2">
         <i className='fa fa-shopping-cart me-1'>Cart{state.length}</i></Link>
       </div>
       
     </div>
   </div>
 </nav>



   
   </>
  )
}

export default Navbaar