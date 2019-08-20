import React from 'react';
import './Button.scss'


const Button = (props) => {
    return <button onClick={props.handleClick} className="button" type="button">{ props.innerText }</button>
}

export default Button;


// export default class Button extends Component {
//     render() {
//         return(
//         );
//     }
// }