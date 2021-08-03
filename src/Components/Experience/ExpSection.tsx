import React from 'react'
interface IProps{
    starting : string;
    ending : string;
    degreeOrRole : string;
    institution : string;
}
const ExpSection : React.FC<IProps> = ({institution,starting,ending,degreeOrRole}) => {
    return (
        <div>
            <p>{starting} to {ending}</p>
            <h4>{degreeOrRole}</h4>
            <h4>{institution}</h4>
        </div>
    )
}

export default ExpSection
