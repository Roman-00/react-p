import React from 'react';
import './dark.css';

export const Dark = (props) => {

    const cls = ['dark'];

    if(props.showModal) {
        cls.push('show__dark');
    }

    return(
        <div className={cls.join(' ')} onClick = {props.modalHideHandler}>

        </div>
    )
};