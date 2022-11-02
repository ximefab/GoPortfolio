import React from "react";
import '../App.css';

const Register = () => {

    return (

        <div className='RegisterDiv'>
        <form>
          <h1 className='h3 mb-3 fw-normal'> Register here</h1>
          <input type="email" id="inputEmail" className='form-control' placeholder='Email address' required/> 
          <br></br>
          <input type="password" id="inputPassword" className="form-control" placeholder="password" required/>
          <br></br>
          <button className='w-100 btn btn-lg btn-primary' type="submit">Register</button>
        </form>        
      </div>

    );

};

export default Register;