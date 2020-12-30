import React from 'react';
import './navbar.css';

export const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/calc">Калькулятор</a></li>
                <li><a href="/sample">Выборки</a></li>
                <li><a href="/info">Информация</a></li>
            </ul>
        </nav>
    )
}