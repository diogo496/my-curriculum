import React, {useEffect, useState, useRef} from 'react'
import './Toolbar.css'
import image from '../../assets/foto1.png'
import WELCOME_DATA from '../Welcome.json';
import TEXT from '../Text.json'

const Toolbar = (props) => {

    const [isMobile, setIsMobile] = useState(false)
    const ref = useRef(null)

    const handleResize = () =>{
        if (window.innerWidth <720){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
        // console.log("innerWidth=>",window.innerWidth)
    }


    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        props.getImageHeight(ref.current.clientHeight)
    })
    
    return (
        <div className="container">
            <img ref={ref} className="image" src={image} alt="firstImage"></img>
            <text className="myName">Diogo Reis</text>
            <div className="textProfession">
                <text style={{fontSize:"4vw", width:"28%", color:"white"}} >{TEXT[0][props.language].text}</text>
            </div>
        </div>
    )
}

export default Toolbar
