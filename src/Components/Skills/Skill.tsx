import React from 'react'
import MyImage from '../MyImage/MyImage'
interface IProps{
    skill: string;
    percentage:string;
    color:any
}
const Skill : React.FC<IProps> = ({skill,percentage,color}) => {
   
    return (
        <div >
            <div style={{display:"flex", width: "60%",justifyContent:"space-between"}}>
            <h2>{skill}</h2>
            <h3>{percentage}%</h3>
            </div>
           
            <div style={{position: "relative", width: "60%", height: "20px", backgroundColor: "white",borderRadius:"30px"}}>
                <div style={{ position: "absolute", top: "1", width: `${percentage}%`, height: "20px", backgroundColor: color,borderRadius:"30px" }}></div>
            </div>
        </div>
    )
}

export default Skill
