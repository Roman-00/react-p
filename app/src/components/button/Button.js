import React from 'react';
import './button.css';

export const Button = (props) => {
    return(
        <button 
            className="btn" 
            disabled = {props.disabled}
            
            onClick = {() => props.click ? props.click(props.arg || '') : undefined}>
            { props.text }
        </button>
    )
};