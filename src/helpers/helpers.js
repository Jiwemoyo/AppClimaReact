const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "44e4022f1ef87f3a2b17455fb00ad9aa";

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
    return await response.json();
  } catch (error) {
    console.log(`Ha ocurrido algo: ${error}`);
    return null;
  }
};
