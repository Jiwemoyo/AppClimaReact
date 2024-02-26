import React, { useState } from "react";

export const WheatherApp = () => {

  const urlBase ="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY ='44e4022f1ef87f3a2b17455fb00ad9aa'
  const difKelvin = 273.15

  const [ciudad, setCiudad] = useState("");
  const [dataclima, setDataclima] = useState(null);

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const fetchclima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      const data = await response.json()
      setDataclima(data)
    } catch (error) {
        console.log(`Ah ocurrido algo:${error}`)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchclima();
  };

  return (
    <div className="container">
      <h1>Aplicacion de clima</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleCambioCiudad} />
        <button type="submit">Buscar</button>
      </form>
      {dataclima && (
        <div>
          <h2>{dataclima.name}</h2>
          <p>Temperatura: {parseInt(dataclima?.main?.temp-difKelvin)}*C</p>
          <p>Condicion Meteorologica: {dataclima?.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${dataclima.weather[0].icon}@2x.png`}/>
        </div>
      )}
    </div>
  );
};
