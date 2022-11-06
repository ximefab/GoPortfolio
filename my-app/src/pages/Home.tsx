import React from "react";
import '../App.css';
import './Home.css'; 
import { useNavigate } from "react-router-dom";



const Home = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `Contact`; 
      navigate(path);
    }

    return (

        <div className="FullHome">
           <div className="Homeleft">
                <div className="ImageHome">

                </div>


           </div>
           <div className="Homeright">
            <h1 className="HeaderFont">Welcome</h1>​
            <h3 className="TextFont"> 
                <div className="HomeBottomText">Hello! My 
                name is Ann Marie Frisby and 
                I am very excited to show you
                my work throughout the years. 
                While my skills grow 
                overtime, I am excited to use
                this website as a time capsule
                of all my work throughout 
                the past and to show how I've 
                been able to grow over time!</div></h3>

                <div className="ContainerStuff">
                    <button className="ContactButton" onClick={routeChange}> Contact me!</button>  
                </div>

                           
           </div>
        </div>

    );

};

export default Home;