import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./commonComponets/layouts/MainLayout";

ReactDOM.render(
  <React.StrictMode>
    <MainLayout name="Petr" age={5} friends={["Alex", "Max", "Ihor"]} />
  </React.StrictMode>,
  document.getElementById("root")
);
