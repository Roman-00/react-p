import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { Button } from '../button/Button';
//import { Input } from '../input/Input';
import './registr.css';

export const Registr = () => {

    const {renderInputs, state, registerHandler} = useContext(RateContext);

    return(
        <>
            <div className="modal__form">
                {renderInputs()}
            </div>
            <div className="modal__btn">
                <Button text="Зарегестрироваться" disabled = {!state.isFormValid} click={registerHandler}/>
            </div>
        </>
    )
};