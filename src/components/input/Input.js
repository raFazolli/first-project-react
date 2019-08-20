import React from 'react';
import "./Input.scss";


const Input = (props) => {
    return <input onChange={props.handlesText}  className="input" value={props.value} type={props.type} placeholder={ props.text }></input>
};

export default Input;


// export default class Input extends Component {
//     render() {
//         return(
            
//         );
//     }
// }
