import React from 'react';
import '../App.css';
import './GraphicDesign.css'; 
const GraphicDesign = () => {

    return (
        <body className='FullGraph'>
            <div className='Header1'>
                <br></br>
                <br></br>
                <h1 className='HeaderFont'>Graphic Design</h1>
            </div>
            <div className='Sections'>
                <div className='P11R'></div>
                <div className='P11L'>
                    <div className='P11LT'>
                        <h1 className='TextFont'>"A play on words!"</h1>
                        <br></br>
                        <br></br>
                        <h5 className='TextFont'>Graphic art modeling the words 
                            (in order from left to right)
                            playful, hover, angry, 
                            mechanical, progress, and
                            disperse through Adobe 
                            Illustrator.</h5>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className='Sections'>
                <div className='P12L'></div>
                <div className='P12R'>
                    <div className='P12RT'>

                    <h1 className='TextFont'>"Money Patterns"</h1>
                        <br></br>
                        <br></br>
                        <h5 className='TextFont'>
                            Graphic patterns from 
                            different countries' 
                            currencies through 
                            Adobe Illustrator. 
                            (Dubai, South Africa,
                             United States, and Australia)</h5>
                    </div>
                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            
            <div className='Sections'>
                <div className='SelfPortrait'></div>
                <div className='Selftxt'>
                    <br></br>
                    <h2 className='TextFont'>Illustrator Self Portrait</h2>
                </div>
            </div>


            <br></br>
            <br></br>
            <br></br>
            <br></br>



            <div className='LastSec'>
                <div className='Cry'></div>
                <div className='LastText'>
                    <h2 className='TextFont'>"In Her Eyes"</h2>
                    <br></br>
                    <div className='poem'>
                    <h5>Graphic art that uses photoshop</h5>
                    <h5>and pictures to depict the</h5>
                    <h5>emotions a person feels when</h5>
                    <h5>going through drug and alcohol</h5>
                    <h5>addiction.</h5>


                    </div>
                    


                </div>
            </div>
            
        </body>

    );

};

export default GraphicDesign;