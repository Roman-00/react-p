import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { NavBar } from '../navbar/NavBar';
import LogoSVG from '../../image/logo-icon.svg';
import './header.css';

export const Header = () => {

    const {modalShowHandler} = useContext(RateContext);

    return(
        <div className="header">
            <div className="layout">
                <div className="header__wrap">
                    <div className="logo">
                        <a href="/">
                            <span className="logo__svg">
                                <img src={LogoSVG} alt="logo"/>
                            </span>
                            <h2>RateApp</h2>
                        </a>
                    </div>

                    <NavBar/>

                    <div className="person">
                        <i className="fa fa-user" area-hidden="true" onClick = {modalShowHandler}>
                            <span className="person__text">Вход / Регистрация</span>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}