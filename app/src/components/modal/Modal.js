import React, { useState, useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { Login } from '../login/Login';
import { Registr } from '../registr/Registr';
import './modal.css';

export const Modal = () => {

    const {state, modalHideHandler} = useContext(RateContext);

    const [value, setValue] = useState('login');
    const links = [{name: 'Вход', id: 'login'}, {name: 'Регистрация', id: 'register'}];
    const cls = ['modal'];

    const windowHandler = (id) => {
        setValue(id);
    };

    if(state.showModal) {
        cls.push('modal__show');
    }

    return(
        <div className={cls.join(' ')}>
            <>
                <div className="modal__head">
                    <ul>
                        {links.map((item, i)=> {
                            return(
                                <li style={{
                                    fontWeight: item.id === value ? 'bold' : 'normal',
                                    cursor: 'pointer',
                                    transition: '0.3s ease-in'
                                }} key = {item.name} onClick={() => windowHandler(item.id)}>{item.name}</li>
                            )
                        })}
                    </ul>

                    <i className="fa fa-times" aria-hidden = "true" onClick = {modalHideHandler}/>
                </div>
            </>
            <div style = {{textAlign: 'center'}}>
                <h2 style = {{color: '#f01f30'}}>{state.error}</h2>
            </div>

            {value === 'register' ? <Registr/> : <Login/>}
            {/*<Login/>
            <Registr/>*/}
        </div>
    )
};