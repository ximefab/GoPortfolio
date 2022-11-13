import React from 'react';
import '../App.css';
import './Photography.css'; 
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';


  
//import Carousel from 'react-bootstrap/Carousel';
const Photography = () => {

    return (
        <body >
            <h1 className='HeaderFont'>Photography</h1>
            <div className='CarouColor'>
            <MDBCarousel showControls showIndicators>

                <MDBCarouselItem
                    itemId={1}
                    src='https://i.imgur.com/PhC4ND8.jpg'>
                </MDBCarouselItem>

                <MDBCarouselItem
                    itemId={2}
                    src='https://i.imgur.com/uFOJbkC.jpg'>
                </MDBCarouselItem>

                <MDBCarouselItem
                    itemId={3}
                    src='https://i.imgur.com/XgIFZZP.jpg'>
                </MDBCarouselItem>

                <MDBCarouselItem
                    itemId={4}
                    src='https://i.imgur.com/T8LlNGf.jpg'>
                </MDBCarouselItem>

                <MDBCarouselItem
                    itemId={5}
                    src='https://i.imgur.com/vCvs6j0.jpg'>
                </MDBCarouselItem>

                <MDBCarouselItem
                    itemId={6}
                    src='https://i.imgur.com/DCfvN5F.jpg'>
                </MDBCarouselItem>

                <MDBCarouselItem
                    itemId={7}
                    src='https://i.imgur.com/g9Vhku8.jpg'>
                </MDBCarouselItem>

                <MDBCarouselItem
                    itemId={8}
                    src='https://i.imgur.com/UmEN904.jpg'>
                </MDBCarouselItem>

            </MDBCarousel>
            </div>

            <div className='cartxt'>
                <h2 className='TextFont'>Daniyel In Baton Rouge</h2>
                <br></br>
                <h5 className='TextFont'>The first official photoshoot I decided to organize </h5>
                <h5 className='TextFont'>with one of my best friends, Daniyel.</h5>
                <h5 className='TextFont'>Captured in January 2022, downtown Baton Rouge.</h5>
                
                 
                
            </div>

            
        </body>

    );

};

export default Photography;