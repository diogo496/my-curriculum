import React, {useEffect, useRef } from 'react'
import './BasicInformation.css'
import TEXT from '../Text.json';
import {SiGmail} from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {MdPerson} from 'react-icons/md'
import {BiWorld} from 'react-icons/bi'
import {AiFillFilePdf} from 'react-icons/ai'
import myPDFEng from '../../assets/DiogoReis_CV_2021_ENG.pdf';
import myPDFPort from '../../assets/DiogoReis_CV_2021_PORT.pdf';



const BasicInformation = (props, ref) => {
    
    const heightRef = useRef(null);

    const goToLinkedin = () =>{
        window.open('https://www.linkedin.com/in/diogo-reis-4s96/', '_blank');
    }

    useEffect(() => {
        console.log(window.scrollY)
        console.log("cucu")
        const height = heightRef.current.offsetHeight
        console.log("height=>",height)
      },[]);

    return (
        <div className="BasicInformationContainer" ref={heightRef}>
            <h3 ref={ref}>{TEXT[3][props.language].text}</h3>

            <div style={{marginBottom:"7px", fontSize:"18px"}}>
                <MdPerson size={"3vw"} style={{marginRight:"15px" , verticalAlign:"middle"}}/>
                Diogo Reis
            </div>
            <div className="ExternalURL" style={{marginBottom:"7px"}} onClick={goToLinkedin}>
                <AiFillLinkedin size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/> 
                https://www.linkedin.com/in/diogo-reis-4s96/
                
            </div>
            <div style={{marginBottom:"7px", fontSize:"18px"}}>
                <SiGmail size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/>
                diogoreis496@gmail.com
            </div>
            <div style={{marginBottom:"7px", fontSize:"18px"}}>
                <GoLocation size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/>
                Portugal, Seixal - Corroios
            </div>
            <div style={{marginBottom:"7px", fontSize:"18px"}}>
                <BiWorld size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/>
                <span>{TEXT[4][props.language].text}</span>
            </div>
            <div style={{marginBottom:"7px", fontSize:"18px"}}>
                <AiFillFilePdf size={"3vw"} style={{marginRight:"15px", verticalAlign:"middle"}}/>
                {props.language ? 
                <a href={myPDFPort} style={{textDecoration:"none"}} download="My_CV_eng.pdf">Download CV </a>
                : 
                <a href={myPDFEng} style={{textDecoration:"none"}} download="My_CV_port.pdf">Descarregar CV </a>
                }
            </div>
            
        </div>
    )
}

export default React.forwardRef(BasicInformation)
