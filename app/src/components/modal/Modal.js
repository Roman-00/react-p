import React from 'react';
//import { Login } from '../login/Login';
import { Registr } from '../registr/Registr';
import './modal.css';

export const Modal = () => {
    return(
        <div className="modal">
            <>
                <div className="modal__head">
                    <ul>
                        <li>
                            Вход
                        </li>
                        <li>
                            Регистрация
                        </li>
                    </ul>

                    <i className="fa fa-times" aria-hidden = "true"/>
                </div>
            </>
            {/*<Login/>*/}
            <Registr/>
        </div>
    )
};