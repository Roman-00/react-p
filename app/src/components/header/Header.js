import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import { NavBar } from '../navbar/NavBar';
import './header.css';

export const Header = () => {

    const {modalShowHandler} = useContext(RateContext);

    return(
        <div className="header">
            <div className="header__wrap">

                <div className="logo">
                    <a href="/">
                        <h2>RateApp</h2>
                    </a>
                </div>

                <NavBar/>

                <div className="person">
                    <i className="fa fa-user" area-hidden="true" onClick = {modalShowHandler}/>
                </div>
            </div>
            <hr/>
        </div>
    )
}