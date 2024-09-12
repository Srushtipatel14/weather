import { useEffect, useRef, useState } from "react";
import "../../css/weather.css";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [year, setYear] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [dateVal, setDate] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const isMount = useRef(true);

  useEffect(() => {
    const getDataFunction = async () => {
      try {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const dayOfMonth = date.getDate();
        const dayOfWeek = date.getDay();

        setYear(year);
        setDate(dayOfMonth);

        // Set day
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        setDay(days[dayOfWeek]);

        // Set month
        const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        setMonth(months[month - 1]);
      } catch (error) {
        console.log(error);
      }
    };

    if (isMount.current) {
      getDataFunction();
      isMount.current = false;
    }
  }, []);

  const showWeather = async (e) => {
    try {
      e.preventDefault();
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45f57dbda26be7a9a36efa838bca82a1`
      );
      setWeather(weatherData.data);
      setCity("");
      setErrorMessage("")
    } catch (error) {
      if(error.response && error.response.status===404)
      {
      setErrorMessage("City not found");
      setWeather({});
      setCity("");
      }
      else{
        setErrorMessage("An error occurred. Please try again.");
        setWeather({});
        console.log(error);
      }
    }
  };

  return (
    <div className="divWea">
      <div className="SearchBar">
        <form id="form" onSubmit={showWeather}>
          <input
            value={city || ""}
            className="inpt"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter Your City Name"
          />
          <button type="submit" className="srchBtn">
            Search
          </button>
        </form>
      </div>
      <div className="weatherContainer">
        <div className="infoBox">
          <div className="para1">
            <div className="leftpara1">
              <p>{day}</p>
            </div>
            <div className="rightpara1">
              <p>{`${dateVal} ${month}, ${year}`}</p>
            </div>
          </div>
          <div className="consec">
            {errorMessage ?
            (
              <p className="para2">{errorMessage}</p>
            )
            : weather && weather.main ?(
              <>
                <p className="para2">
                  {weather.name}, {weather.sys.country}
                </p>
                <p className="para2">
                  {parseFloat(weather.main.temp - 273.15).toFixed(2)}
                  <sup className="sup"> o </sup>C
                </p>
              </>
            ):(
              <p className="para2">No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

// <div className="weatherShow">

// </div>
