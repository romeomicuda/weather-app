import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const Layout = () => {
  return (
    <>
      <Nav defaultActiveKey="" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="forecast">Forecast</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="line-chart">Line Chart</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="heat-index-calculator">
            Heat Index Calculator
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </>
  );
};
