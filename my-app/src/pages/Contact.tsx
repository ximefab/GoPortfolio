import React from 'react';
import '../App.css';
import './Contact.css'; 
const Contact = () => {

    return (
        // <body className='PageContainer'>
        //     <div>
        //         <form>
        //             <h1 className='h3 mb-3 fw-normal'> Contact Me here!</h1>
        //             <input type="email" id="inputEmail"  placeholder='Email address' required/> 
        //             <br></br>
        //             <input type="password" id="inputPassword"  placeholder="password" required/>
        //             <br></br>
        //             <input type="message" id="inputMessage"  placeholder="password" required/>
        //             <br></br>
        //             <button >Submit</button>
        //         </form>        
        //     </div>
        // </body>

        <div className='ContactDiv'>
        <form>
          <h1 className='h3 mb-3 fw-normal'> contact me here!</h1>
          <input type="email" id="inputEmail" className='form-control' placeholder='Email address' required/> 
          <br></br>
          <input type="password" id="inputPassword" className="form-control" placeholder="password" required/>
          <br></br>               
                        
          <input type="message" className="form2" id="inputMessage"  placeholder="Message" required/>
          <br></br>
          <button className='w-25 btn btn-lg btn-primary' type="submit">Submit</button>
        </form>        
      </div>

    );

};

export default Contact;