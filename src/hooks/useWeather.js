import { useState } from "react";
import { fetchWeatherData } from "../helpers/helpers";

const difKelvin = 273.15;

export const useWeather = () => {
  const [ciudad, setCiudad] = useState("");
  const [dataclima, setDataclima] = useState(null);

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ciudad.length > 0) {
      const data = await fetchWeatherData(ciudad);
      setDataclima(data);
    }
  };

  return {
    difKelvin,
    ciudad,
    dataclima,
    handleCambioCiudad,
    handleSubmit,
  };
};
