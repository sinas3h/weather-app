import React from "react";
import style from "./City.module.css";
import deleteIcon from "../image/Close-Square.svg";

const City = (props) => {
  return (
    <li className={style.city}>
      <h2 className={style.cityName}>{props.name}</h2>
      <p className={style.countryName}>{props.country}</p>
      <figure className={style.icon1}>
        <img className={style.icon} src={props.icon} alt="city" />
      </figure>
      <p className={style.temprature}>{props.temp}</p>
      <p className={style.desc}>{props.desc}</p>
      <span
      className={style.delete}
        onClick={() => {
          props.deleteHandler();
        }}
      >
        <img src={deleteIcon} alt="delete" />
      </span>
    </li>
  );
};

export default City;
