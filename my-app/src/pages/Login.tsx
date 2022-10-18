import React from 'react';
import '../App.css';
const Login = () => {

    return (

      <div className='SignInDiv'>
        <form>
          <h1 className='h3 mb-3 fw-normal'> sign in!</h1>
          <input type="email" id="inputEmail" className='form-control' placeholder='Email address' required/> 
          <br></br>
          <input type="password" id="inputPassword" className="form-control" placeholder="password" required/>
          <br></br>
          <button className='w-100 btn btn-lg btn-primary' type="submit">sign in</button>
        </form>        
      </div>

    );

};

export default Login;