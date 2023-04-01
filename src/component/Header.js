import React, { useState } from "react";
import style from "./Header.module.css";
import axios from "axios";
import City from "./City";
import AddCity from "./AddCity";
import searchSvg from "../image/search-normal.svg"

const Header = () => {
  const [input, setInput] = useState("");

  const [dataWeather, setData] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    let valueCity = `${input}`;
    const apiKey = "c8f317f2163343ff4ffa6b1e22038c8d";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${valueCity}&appid=${apiKey}&units=metric`
      )
      .then((res) => {
        console.log(res);
        const { id, main, sys, weather, name } = res.data;

        setData(
           [...dataWeather,
              {
                cityName: name,
                countryName: sys.country,
                temperature: Math.round(main.temp),
                description: weather[0]["description"],
                icon: `http://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`,
                id: id
              }
            ]
        );

        console.log(dataWeather);

        setInput("");
      });
  };
  console.log(dataWeather);

  const deleteHandler = (id) => {
    console.log(id)
    const updateData = dataWeather.filter((e) => e.id !== id)
    setData(updateData)

  }
  return (
    <>
      <h1 className={style.headeer}>Weather App</h1>
      <div className={style.container}>
        <div className={style.topContent}>
          <form onSubmit={searchHandler} action="" className={style.content}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className={style.inputText}
              placeholder="Search Location"
              autoComplete="no"
            />
            <button type="submit" className={style.submitButton}>
              <img src={searchSvg} alt="search" />
            </button>
            <span className={style.error}></span>
          </form>
        </div>

        <div className={style.bottomContent}>
          <ul id="ulCity" className={style.ulCity}>
          {/* <AddCity /> */}
            {
            // dataWeather.addweather.length === 0 ? (
            //   <div className={style.wellcomeBlock}>
            //     <h2 className={style.wellcome}>wellcom</h2>
            //     <h3>search a city</h3>
            //   </div>
            // ) : 
            
              (dataWeather.map((item) => (
                <City
                  key={item.id}
                  name={item.cityName}
                  country={item.countryName}
                  temp={Math.round(item.temperature)}
                  desc={item.description}
                  icon={item.icon}
                  deleteHandler={()=>{deleteHandler(item.id)}}
                />
              ))
            )}
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
