import React, { useContext } from 'react';
import './exchange.css';
import { RateContext } from '../../context/RateContext';

export const Exchange = () => {

    const {state} = useContext(RateContext); 
    const currency = {...state.currency};

    return(
        <div className="exchange">
            <div className="exchange__container">
                <div className="exchange__content">
                    <div>
                        <p className="exchange__content-p">
                            <span className="exchange__title-text">Базовая валюта: &nbsp;{state.base}</span> 
                            <span className="exchange__title-date">Дата: {state.date}</span>
                        </p>
                    </div>
                    <ul>
                        {
                            Object.keys(currency).map((item, i) => {
                                return(
                                    <li key={item}>
                                        <span className="exchange__span-block">
                                            <img src= {currency[item].flag} alt={item} />
                                            {item}
                                        </span>
                                        <span className="exchange__span-resault">
                                            {`1${state.base} = ${currency[item].course} ${item}`}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}