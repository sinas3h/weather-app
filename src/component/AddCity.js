import React from 'react';

import style from "./AddCity.module.css"

const AddCity = () => {
    return (
        <div>
            <li className={style.addCity}>
                <span className={style.plus}>+</span>
            </li>
        </div>
    );
};

export default AddCity;