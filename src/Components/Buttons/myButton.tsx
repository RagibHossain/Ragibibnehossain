import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { MainstoreContext } from '../../Stores/mainStore';
interface IProps {
    content: string;
}
const MyButton: React.FC<IProps> = ({ content }) => {


    const store = useContext(MainstoreContext);
    const { lightMode: light, setMode } = store;
    const defaultButtonStyle = {
        backgroundColor: light ? "white" : "#151515",
        color: light ? "#151515" : "white",
        fontSize:"20px",
        height:"60px",
        width:"150px",
        cursor:"pointer",
        marginTop:"20px",
        transition: "0.5s",
        borderRadius:"5px"
    };
    const hoverButtonStyle = {
        backgroundColor: light ? "#151515" : "white",
        color: light ? "white" : "#151515",
        height:"60px",
        width:"150px",
        fontSize:"21px",
        cursor:"pointer",
        marginTop:"20px",
        transition: "0.5s",
        borderRadius:"5px"
    }
    const [hovered, setHovered] = useState(false);
    return (
        <div>
            <button 
            className="button" 
            style={hovered ? hoverButtonStyle : defaultButtonStyle} 
            onMouseOver={() => setHovered(!hovered)}
            onMouseOut={() => setHovered(!hovered)}
            >{content}
            </button>
        </div>
    )
}

export default observer( MyButton);
