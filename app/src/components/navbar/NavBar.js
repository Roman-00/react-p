import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

import HeroIcon from '../../image/navbar/grid.svg';
import CalcIcon from '../../image/navbar/calculator.svg';
import Coins from '../../image/navbar/coins.svg';
import Info from '../../image/navbar/info.svg';

export const NavBar = () => {
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <img src={HeroIcon} alt="icon navbar"/>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/calc">
                        <img src={CalcIcon} alt="icon navbar"/>
                        Калькулятор
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sample">
                        <img src={Coins} alt="icon navbar"/>
                        Выборки
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/info">
                        <img src={Info} alt="icon navbar"/>
                        Информация
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}