import React from 'react';
import '../App.css';
const Login = () => {

    return (

      <div className='SignInDiv'>
        <form method="get" action="http://localhost:6000/login">
          <h1 className='h3 mb-3 fw-normal'> sign in!</h1>
          <input id="inputEmail" name="name" className='form-control' placeholder='Email address' required/> 
          <br></br>
          <input type="password" id="inputPassword" name="password" className="form-control" placeholder="password" required/>
          <br></br>
          <button className='w-100 btn btn-lg btn-primary' type="submit">sign in</button>
        </form>        
      </div>

    );

};

export default Login;