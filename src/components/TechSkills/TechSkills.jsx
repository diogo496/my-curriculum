import React, {useState, useEffect} from 'react'
import './TechSkills.css'
import TEXT from '../Text.json';


const TechSkills = (props, ref) => {

    const [length, setLength] = useState(false)

    const listenScrollEvent = (event) => {
        if (window.scrollY < 1000) {
          return setLength(false)
        } else if (window.scrollY > 1000) {
          return setLength(true)
        } 
        // console.log(window.scrollY)
      }
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        // console.log(window.scrollY)
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      });

    return (
        <div className="TechSkillsContainer">

            <div>
                <h3 ref={ref}>{TEXT[10][props.language].text}</h3>
                <h4>{TEXT[11][props.language].text}</h4>
                
                <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"1px solid grey ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                <thead>
                    <tr>
                        <th style={{width:"30%"}}>Skill </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {TEXT.map((sentence,i)=>{
                        if (i >= 12 && i <=25){
                            return(
                                <tr key={i}>
                                    <td className="skillNameColumn">{sentence[props.language].text}</td>
                                    <td>{length?
                                        <div className="Skill0" style={{width:sentence[2].level}}>
                                        </div>: null}
                                    </td>
                                </tr>
                            );
                        }
                    })}

                </tbody>
                </table>

                <h4>{TEXT[26][props.language].text}</h4>
                <table style={{marginTop:"0px", marginLeft: "5%", textAlign:"center", border:"1px solid grey ", borderRadius:"5px", width:"90%", fontSize:"18px"}}>
                    <thead>
                        <tr>
                            <th style={{width:"30%"}}>Skill </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {TEXT.map((sentence,i)=>{
                            if (i >= 27 && i <=32){
                                return(
                                    <tr key={i}>
                                        <td className="skillNameColumn">{sentence[props.language].text}</td>
                                        <td>{length?
                                            <div className="Skill0" style={{width:sentence[2].level}}>
                                            </div>: null}
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default React.forwardRef(TechSkills)
