import React from 'react';
import './calc.css';

import { Counter } from '../../components/counter/Counter';
import { CountResault } from '../../components/countResault/CountResault';


export const Calc = () => {
    return(
       <div className="calculator">
           <div className="calc__container">
                <Counter/>
                <CountResault/>
           </div>
       </div>
    )
}