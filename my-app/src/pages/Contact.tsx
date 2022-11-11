import React from 'react';
import '../App.css';
import './Contact.css'; 
const Contact = () => {

    return (
        <body className='PageContainer'>
            <div>
                <form>
                    <h1 className='h3 mb-3 fw-normal'> sign in!</h1>
                    <input type="email" id="inputEmail"  placeholder='Email address' required/> 
                    <br></br>
                    <input type="password" id="inputPassword"  placeholder="password" required/>
                    <br></br>
                    <input type="message" id="inputMessage"  placeholder="password" required/>
                    <br></br>
                    <button >sign in</button>
                </form>        
            </div>
        </body>

    );

};

export default Contact;