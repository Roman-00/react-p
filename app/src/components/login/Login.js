import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { Button } from '../button/Button';
//import { Input } from '../input/Input';
import './login.css';

export const Login = () => {

    const {renderInputs} = useContext(RateContext);

    return(
        <>
            <div className="modal__form">
                {renderInputs()}
            </div>
            <div className="modal__btn">
                <Button text="Войти"/>
            </div>
        </>
    )
};