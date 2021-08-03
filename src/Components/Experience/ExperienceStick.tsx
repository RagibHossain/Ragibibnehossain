import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
interface IProps{
 icon : IconProp;
 left : string
}
const ExperienceStick : React.FC<IProps> = ({icon,left}) => {
    return (
        <div>
               <hr style={{ position: "absolute", height: "390px",border:"1px solid", left: "50px" }} />
                    <div className="icon1" style={{ position: "absolute", left: left, top: "85px" }}>
                        <FontAwesomeIcon
                            size="2x"
                            icon={icon} />
                    </div>
                    <div className="icon2" style={{ position: "absolute", left: left, top: "225px" }}>
                        <FontAwesomeIcon
                            size="2x"
                            icon={icon} /></div>
                    <div className="icon3" style={{ position: "absolute", left: left, top: "365px" }}>
                        <FontAwesomeIcon
                            size="2x"
                            icon={icon} />
                    </div>
        </div>
    )
}

export default ExperienceStick
