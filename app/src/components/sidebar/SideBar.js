import React, { useContext } from 'react';
import './sidebar.css';
import { RateContext } from '../../context/RateContext';

export const SideBar = () => {

    const {state} = useContext(RateContext);

    return(
        <div className="sidebar">
           <div className="sidebar__head">
                <h3>Все валюты</h3>
           </div>
           <div className="sidebar__content">
               <ul>
                   {
                       Object.keys(state.currency).map((item, i)=> {
                        return(
                            <li key={item}>
                                <p>
                                    <span>
                                        <img src={state.currency[item].flag} alt={item} />&nbsp;{item}
                                    </span>&nbsp; {state.currency[item].name}
                                </p>
                            </li>
                        )
                       })
                   }
                   <li></li>
               </ul>
           </div>
        </div>
    )
}