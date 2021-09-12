import React, {useState, useEffect} from 'react';
import './Interests.css';
import TEXT from '../Text.json'
import softwareDevelopmentIcon from '../../assets/software-development.png';
import systemsArchitectureIcon from '../../assets/systems-architecture.png';
import renewableEnergyIcon from '../../assets/renewable-energy.jpg';
import smartGridsIcon from '../../assets/smart-grids.png';


const Interests = (props, ref) => {

    const [fontSize, setFontSize] = useState("16px")
    
    useEffect(()=>{
        if (props.isMobile){
            
            setFontSize("16px")
        }
        else{
            setFontSize("13px")
        }
    })

    return (
        <div className="InterestsContainer">
            <div>
                <h3 ref={ref}>{TEXT[5][props.language].text}</h3>
                <div className="InterestsText">
                <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"0px ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                    <tbody id="content">
                        <tr  className="row">
                            <td style={{fontSize:fontSize}}>
                                {TEXT[6][props.language].text}
                            </td>
                            <td style={{fontSize:fontSize}}>
                                {TEXT[7][props.language].text}
                            </td>
                            <td style={{fontSize:fontSize}}>
                                {TEXT[8][props.language].text}

                            </td>
                            <td style={{fontSize:fontSize}}>
                                {TEXT[9][props.language].text}
                            </td>
                        </tr>
                        <tr className="row">
                            <td >
                                <img className="interestsImg" alt="softwareDev" src={softwareDevelopmentIcon}></img>
                            </td>
                            <td >
                                <img className="interestsImg" alt="systemsArch" src={systemsArchitectureIcon}></img>
                            </td>
                            <td >
                                <img className="interestsImg" alt="smart" src={smartGridsIcon}></img>
                            </td>
                            <td >
                                <img  className="interestsImg" alt="renewable" src={renewableEnergyIcon}></img>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default React.forwardRef(Interests)
