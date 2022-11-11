import React from 'react';
import '../App.css';
import './Works.css'; 
import { useNavigate } from "react-router-dom";
const Works = () => {

    let navigate = useNavigate(); 

    const toprod = () =>{ 
      let path1 = `productions`; 
      navigate(path1);
    }
    
    const tophoto = () =>{ 
        let path2 = `photography`; 
        navigate(path2);
      }

      const todigad = () =>{ 
        let path3 = `digitalad`; 
        navigate(path3);
      }
      
      const tograph = () =>{ 
          let path4 = `graphicdesign`; 
          navigate(path4);
        }
    return (
        <body>
            <div className='WorksContainer'>
                <div className='HorizontalContainerTop'>
                    <div className='LeftBox' onClick={toprod}>Productions</div>
                    <div className="RightBox"onClick={tophoto}>Photography</div>

                                   

                </div>

                <div className='HorizontalContainerBot' >
                    <div className='LeftBox'onClick={todigad}>Digital Advertising</div>
                    <div className="RightBox"onClick={tograph}>Graphic Design</div>


                </div>

            </div>
            
        </body>

    );

};

export default Works;