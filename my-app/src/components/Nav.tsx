import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <div className="Fix-Padding">

        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Home</Link>
                <div >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active" >About</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/photography" className="nav-link active" >Photography</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link to="/graphicdesign" className="nav-link active" >Graphic Design</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productions" className="nav-link active" >Productions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/digitalad" className="nav-link active" >Advertising</Link>
                        </li>



                        <li className="nav-item">
                            <Link to="/login" className="nav-link active" >Login</Link>
                        </li>



                    </ul>
                </div>
            </div>
        </nav> 

        </div>



    );
};

export default Nav;