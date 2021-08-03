import React, { useState } from 'react'
interface IProps {
    url1: string;
    url2?: string;
    height: string;
    width: string;
}
const MyImage: React.FC<IProps> = ({ url1, url2, height, width }) => {
    const [hovered, setHovered] = useState(false);
    const imgStyle = {
        borderRadius: "50%",
        height: height,
        width: width,
        backgroundImage: hovered ? `url(${url2})` : `url(${url1})`,
        transition: "0.5s",
        backgroundRepeat: "no-repeat",
        backgroundSize: `${height} ${width}`
    }

    return (
        <div>
            {url2 ?
                <div
                    onMouseOver={() => setHovered(!hovered)}
                    onMouseOut={() => setHovered(!hovered)}
                    style={imgStyle}>
                </div> :
                <div style={imgStyle}></div>}
        </div>
    )
}

export default MyImage
