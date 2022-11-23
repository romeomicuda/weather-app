import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/forecast">Forecast</Link>
        </li>
        <li>
          <Link to="line-chart">Line Chart</Link>
        </li>
        <li>
          <Link to="heat-index-calculator">Heat Index Calculator</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </>
  );
};
