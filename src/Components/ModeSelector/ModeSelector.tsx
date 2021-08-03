import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import {faToggleOn,faToggleOff} from '@fortawesome/free-solid-svg-icons'
library.add(faToggleOff,faToggleOn);
interface IProps{
    setMode :  () => void,
}
const ModeSelector : React.FC<IProps> = ({setMode}) => {
    const [icon,setIcon] = useState<IconProp>("toggle-off")
    return (
        <div className="toggle" style={{position:"fixed",zIndex:1,top:"4%",right:"5%",display:"flex"}}>
            <span style={{padding:"10px"}} onClick={() => {
                setMode()
                setIcon(icon === "toggle-on" ? "toggle-off" : "toggle-on")
            }}> <FontAwesomeIcon size="2x" icon={icon} />
            
            </span>
            <p><strong>{icon === "toggle-on" ? "Dark-mode" : "Light-mode"}</strong></p>
        </div>
    )
}

export default ModeSelector
