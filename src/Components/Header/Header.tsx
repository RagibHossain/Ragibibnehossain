import React from 'react'
interface IProps{
 content : string;
}
const Header : React.FC<IProps> = ({content}) => {
   
    return (
        <div style={{fontSize:"70px",fontWeight:"bold"}}>
            {content}
        </div>
    )
}

export default Header
