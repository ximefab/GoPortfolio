import React from 'react';
import '../App.css';
import './About.css'; 
const About = () => {

    return (
        <body className='FullAbout'>
            <div className='Header'>
                <br></br>
                <br></br>
                <h1 className='HeaderFont'>
                    About me!
                </h1>
            </div>
            <div className='Rest'>
                <div className='RestLeft'></div>
                <div className='RestRight'>
                     <div className='RightH'>
                        <h3 className='HeaderFont'>My Story</h3>
                        
                        </div>
                     <div className='RightT'>
                        <h5 className='TextFont'></h5>
                        I was born in Baton Rouge, Louisiana. 
                        I am currently an alumnus of East 
                        Ascension High School, which is located 
                        n a small city named Gonzales in Ascension 
                        Parish. My story begins in my junior year 
                        of high school, when i decided to take my 
                        first ever Premiere Pro class. Of course, 
                        I fell in love. I decided that I wanted to 
                        go above and beyond and try out the whole 
                        Adobe Creative Suite. In my senior year of 
                        high school, I was able to get certifications 
                        in Premiere Pro, Illustrator, Indesign, 
                        and Photoshop. 


                     </div>


                </div>

            </div>
            
        </body>

    );

};

export default About;