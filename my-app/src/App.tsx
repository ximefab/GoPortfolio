import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="SignInDiv">
      <main className="form-signin">
        <form>
          <h1 className='h3 mb-3 fw-normal'> please sign in!</h1>
          <input type="email" id="inputEmail" className='form-control' placeholder='Email address' required autoFocus/> 
          <input type="password" id="inputPassword" className="form-control" placeholder="password" required/>
          <button className='w-100 btn btn-lg btn-primary' type="submit">sign in</button>
        </form>
      </main>


      </div>


    </div>
  );
}

export default App;
