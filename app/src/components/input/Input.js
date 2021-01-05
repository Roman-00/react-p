import React from 'react';
import './input.css';

function isInvalid({valid, touched, shouldValidate}){
    return !valid && touched && shouldValidate;
}

export const Input = (props) => {

    const cls = ['modal__input'];
    const inputType = props.type || 'text';
    const htmlFor = `${props.type} - ${Math.random()}`;

    return(
        <div className = {cls.join(' ')}>
            <label htmlFor = {htmlFor}>
                {props.label}
            </label>
            <input type = {inputType} id={htmlFor} value={props.value} onChange={props.onChange}/>
            {isInvalid(props) ? <span style={{color: '#f0130'}}>{props.errorMessage || 'введите верное знач'}</span> : null}
        </div>
    )
};