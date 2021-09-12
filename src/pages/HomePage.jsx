import React, {useState, useEffect} from 'react'
import { Toolbar, About, BasicInformation, Interests, TechSkills, Experience } from '../components';
import portugueseFlag from '../assets/portugueseFlag.png';
import englishFlag from '../assets/englishFlag.png';
import './HomePage.css';
const HomePage = () => {

    const [language,setLanguage] = useState('port')
    const [imageHeight, setImageHeight] = useState(false);
    const [isMobile, setIsMobile] = useState(false)

    const handlePort = ()=> {
        localStorage.setItem('language','port')
        setLanguage('port')

    }

    const handleEng = ()=> {
        localStorage.setItem('language','eng')
        setLanguage()
    }

    const getImageHeight = (height) => {
        setImageHeight(height)
        console.log("height in home page =>",height)
    }

    const handleResize = () =>{
        if (window.innerWidth <720){
            setIsMobile(false)
        }else{
            setIsMobile(window.innerWidth)
        }
        console.log("innerWidth=>",window.innerWidth)
    }

    useEffect(() => {
        // setImageHeight("60vh")
        window.addEventListener("resize", handleResize)

        if (imageHeight === false){
            setImageHeight(430)
        }
        if( setIsMobile > 1100){
            setImageHeight(430)
        }else if(setIsMobile >720){
            setImageHeight(270)
        }
    });


    return (
        <div style={{overflowX:"hidden"}}>
            
            <div style={{backgroundColor:"#181818", color:"white", fontWeight:"300", height:"20px", fontSize:"10px"}}>
                <img className="flagEng" src={englishFlag} alt="englishFlag" onClick={handleEng}></img>
                <img className="flagPort" src={portugueseFlag} alt="portugueseFlag" onClick={handlePort}></img>
                <text style={{float:"right", paddingRight:"5px", paddingTop:"2px"}}>Select language</text>

            </div>
            <Toolbar getImageHeight={getImageHeight} language={language}></Toolbar>
            <div style={{position:"relative", width:"auto", height:imageHeight}}></div>
            <About  language={language}></About>
            <BasicInformation language={language}/>
            <Interests language={language}/>
            <TechSkills language={language}/>
            <Experience language={language}/>
            
            
            
        </div>
    )
}

export default HomePage
