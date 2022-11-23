import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table} from 'react-bootstrap';

export const Forecast = () => {
  type MyObject = {
    hourly: {
      time: string[];
      temperature_2m: number[];
      weathercode: number[];
      surface_pressure: number[];
      relativehumidity_2m: number[];
    };
  };
  const [data, setData] = useState<MyObject>({
    hourly: {
      time: [],
      temperature_2m: [],
      weathercode: [],
      surface_pressure: [],
      relativehumidity_2m: [],
    },
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    return fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m&hourly=weathercode&hourly=surface_pressure&hourly=relativehumidity_2m&past_days=7"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((actualData) => console.log(actualData));
  };
  return (
    <>
      <h1>Table</h1>
      <Table className="table">
        <tr>
          <th scope="col">Date time</th>
          {data.hourly.time.map((value) => (
            <td>{value}</td>
          ))}
        </tr>
        <tr>
          <th scope="col">Temperature</th>
          {data.hourly.temperature_2m.map((value) => (
            <td>{value}</td>
          ))}
        </tr>
        <tr>
          <th scope="col">Surface Pressure</th>
          {data.hourly.surface_pressure.map((value) => (
            <td>{value}</td>
          ))}
        </tr>
        <tr>
          <th scope="col">Relative Huminitity</th>
          {data.hourly.relativehumidity_2m.map((value) => (
            <td>{value}</td>
          ))}
        </tr>
        <tr>
          <th scope="col">Weather Code</th>
          {data.hourly.weathercode.map((value) => (
            <td>{value}</td>
          ))}
        </tr>
      </Table>
    </>
  );
};
