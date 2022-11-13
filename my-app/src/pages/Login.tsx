import React from 'react';
import '../App.css';
import {useState} from 'react';
import { Route, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import '../App.tsx';
import {BrowserRouter, Routes} from "react-router-dom";




 const Login = () => {

  const navigate = useNavigate();

  //const App = () => {
    {
    const [userid, setuserid] = useState('');
    const [password, setpassword] = useState('');
  
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
  
      try {
        let res = await fetch("http://localhost:6000/login", {
          method: "get",
          body: JSON.stringify({
            name: userid,
            password: password,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200)
         {
          console.log("Route to home page");
          let path = `contact`; 
          navigate("/");
        }
        else
        {
          console.log("Route Failed")};
        

      } catch (err) {
        console.log(err);
      }
    };

    return (
      <div className='SignInDiv'>
        <form action="http://localhost:6000/login" onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 fw-normal'> sign in!</h1>
          <input id="inputEmail" name="name" className='form-control' placeholder='Email address' 
          onChange={event => setuserid(event.target.value)}
          value={userid}
          required/> 
          <br></br>
          <input type="password" id="inputPassword" name="password" className="form-control" placeholder="password" 
          value={password}
          onChange={event => setpassword(event.target.value)}
          required/>
          <br></br>
          <button className='w-100 btn btn-lg btn-primary' type="submit">sign in</button>
        </form>        
      </div>

    );

};


}
export default Login;


