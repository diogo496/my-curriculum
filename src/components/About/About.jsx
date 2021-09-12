import React, {forwardRef} from 'react'
import './About.css'
import WELCOME_DATA from '../Welcome.json';
import TEXT from '../Text.json'
import fctICON from '../../assets/logoFCT.png';



const About = (props, ref) => {

    
    return (
        <div className="AboutContainer">
            <h3 ref={ref}>{TEXT[1][props.language].text}</h3>
            <div className="AboutText">
                <text>{TEXT[2][props.language].text}</text>
                
                <h4>{TEXT[55][props.language].text}</h4>
                <img style={{height:"50px", display:"inline-block"}} src={fctICON} alt="logoFCT"></img>
                <div style={{display:"inline-block"}}>
                <text>{TEXT[56][props.language].text}</text>
                <br/>
                <text>{TEXT[57][props.language].text}</text>
                </div>
                <br/>
                <h4>{TEXT[58][props.language].text}</h4>
                <text>{TEXT[59][props.language].text}</text>
            </div> 
            

        </div>
    )
}

export default React.forwardRef(About)
