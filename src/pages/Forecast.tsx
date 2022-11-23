import React from "react";
import {useState ,useEffect} from "react"

export const Forecast = () => {
    const [data, setData] = useState<Object>([])
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = () => {
        return fetch("https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m&past_days=7")
        .then((response) => response.json())
        .then((actualData) => console.log(actualData));
    }
  return (
    <>
      <h1>Table</h1>
      <table>
        <tr>
          <th>Date Time</th>
          <th>Weather State</th>
          <th>Temperature</th>
          <th>Surface Pressure</th>
          <th>Relative Humanidity</th>
        </tr>
      </table>
    </>
  );
};
