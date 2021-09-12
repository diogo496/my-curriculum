import React, {useState, useEffect, useRef} from 'react';
import './Experience.css';
import WELCOME_DATA from '../Welcome.json';
import TEXT from '../Text.json';
import {FaReact} from 'react-icons/fa'

const Experience = (props, ref) => {

    const [cardOne, setCardOne] = useState(false);
    const [cardTwo, setCardTwo] = useState(false);
    const [cardThree, setCardThree] = useState(false);
    const [cardFour, setCardFour] = useState(false);
    const [timeLineHeight, setTimeLineHeight] = useState(false);
    const [classNameLeft, setClassNameLeft] = useState(false);
    const [classNameRight, setClassNameRight] = useState(false);
    const [marginLeft, setMarginLeft] = useState('50%')
    const refBeginExperience = useRef(null)
    const refEndExperience = useRef(null)

    const listenScrollEvent = (event) => {
        if( window.scrollY <1500){
            setCardOne(false)
            setCardTwo(false)
            setCardThree(false)
            setCardFour(false)
        }
        if (window.scrollY > 1500) {
            setCardOne(true)
        }
        if (window.scrollY > 1700) {
            setCardTwo(true)
        }
        if( window.scrollY > 1900) {
            setCardThree(true)
        }
        if( window.scrollY > 2100){
            setCardFour(true)
        }
        // console.log(window.scrollY)
      }
      
    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    // console.log(window.scrollY)
    if (props.isMobile){
        setClassNameLeft("leftCard");
        setClassNameRight("rightCard")
        setMarginLeft("50%")
        
    }
    else{
        setClassNameLeft("toTheLeft");
        setClassNameRight("toTheLeft");
        setMarginLeft("5%")
    }

    return () =>
        window.removeEventListener('scroll', listenScrollEvent);

    });

    return (
        <div className="ExperienceContainer" >
            <div ref={refBeginExperience}></div>

            <div>
                <h3 ref={ref} >{TEXT[33][props.language].text}</h3>
                <hr width="1" size={props.isMobile>1000 ? "700": props.isMobile>850 ? "750" : props.isMobile>720? "800" : window.innerWidth>415 ? "700" :"850"} style={{position:"absolute", zIndex:"200", marginTop:"0%", color:"black", marginLeft:marginLeft, width:"0.5%", backgroundColor:"rgb(48,48,48,0.5)", borderRadius:"2px"}}></hr>
                {/* <div className="dot" ></div> */}
                {cardOne ? 
                <div className={classNameLeft}>
                    <h4>{TEXT[34][props.language].text}</h4>
                    <h5>Operations - Automation {`&`} Tools</h5>
                    <text>{TEXT[35][props.language].text}</text>
                    <br/>
                    <text>{TEXT[36][props.language].text}</text>
                    <h5>Technical Architecture/Digital enablement</h5>
                    <text>{TEXT[37][props.language].text}</text>
                    <br/>
                    <text>{TEXT[38][props.language].text}</text>
                    <br/>
                    <text>{TEXT[39][props.language].text}</text>
                    <br/>
                    <text>{TEXT[40][props.language].text}</text>
                    <br/>
                    <text>{TEXT[41][props.language].text}</text>
                </div> 
                : null }
                {cardTwo ?
                <div className={classNameRight}>
                    <h4>{TEXT[42][props.language].text}</h4>
                    <h5>{TEXT[43][props.language].text}</h5>
                    <text>{TEXT[44][props.language].text}</text>
                    <br/>
                    <h5>{TEXT[45][props.language].text}</h5>
                    <text>{TEXT[46][props.language].text}</text>

                </div>
                : null}
                {cardThree ?
                <div className={classNameLeft}>
                <h4>{TEXT[47][props.language].text}</h4>
                    <h5>{TEXT[48][props.language].text}</h5>
                    <text>{TEXT[49][props.language].text}</text>
                    <br/>
                    <text>{TEXT[50][props.language].text}</text>
                    <br/>
                    <text>{TEXT[51][props.language].text}</text>
                </div>
                : null}
                {cardFour ?
                <div ref={refEndExperience} className={classNameRight}>
                    <h4>{TEXT[52][props.language].text}</h4>
                    <h5>{TEXT[53][props.language].text}</h5>
                    <text>{TEXT[54][props.language].text}</text>
                </div>
                : null}

            </div>
            <div style={{backgroundColor:"#181818", color:"white", fontWeight:"300", height:"30px", fontSize:"16px", textAlign:"center", width:"120%", marginTop:"10px", verticalAlign:"middle"}}>
                CV powered by React JS
                <FaReact style={{paddingLeft:"5px", verticalAlign:"middle"}} size={"18px"}/>
            </div>
            <div ref={refEndExperience}></div>
        </div>
    )
}

export default React.forwardRef(Experience)
