import React from 'react';
import '../App.css';
import './Productions.css'; 
const Productions = () => {

    return (
        <body>
            <div className='ProdBody'>
                <div className='Part1'>
                    <div className='Part1Left'>
                        <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/VoZS_SDjhkk?rel=0" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className='Part1Right'>
                        <div className='textParts'>

                            
                        </div>
                    </div>
                </div>



                <div className='Part1'>
                    <div className='Part1Left'></div>
                    <div className='Part1Right'>
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/A-atLl-DLr4?rel=0" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>  

                
                <div className='Part1'>
                    <div className='Part1Left'>
                        <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/LD_SB1RVBYk?rel=0" title="YouTube video" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className='Part1Right'></div>
                </div>                 
            </div>
            
            
            
        </body>

    );

};

export default Productions;