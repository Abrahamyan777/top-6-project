import { useState } from 'react';
import css from './Button.module.css'


function Button(props) {
    console.log(props.open);

  
    
    return(
        <button className={css.defaltStyalButton} >{props.name}</button>
    )
}

export default Button;