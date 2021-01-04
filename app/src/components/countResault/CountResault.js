import React, { useContext } from 'react';
import { RateContext } from '../../context/RateContext';
import './countresault.css';

export const CountResault = () => {

    const {state} = useContext(RateContext);

    return(
        <div className="calc__resault">
            <ul>

                {state.resault ?
                <li>
                    <p>
                        <span>
                            {state.inputValue}&nbsp; RUB
                        </span>
                        =
                        <span>
                            {state.resault}&nbsp;{state.currencyValue}
                        </span>
                    </p>
                </li> : null }
            </ul>
        </div>
    )
};