import React, { useState } from "react";
import { useWeather } from "./hooks/useWeather";

export const WheatherApp = () => {


  const {handleCambioCiudad,handleSubmit,dataclima,ciudad,difKelvin}=useWeather()

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
