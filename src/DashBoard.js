import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

function DashBoard() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("this code willl run on every mounting");
  }, []);

  useEffect(() => {
    console.log("this code willl run on when counter changes");
  }, [counter]);

  useEffect(() => {
    console.log("this code willl run on every destroy");
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard {counter}</h1>
        <button
          onClick={() => setCounter(counter + 1)}
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </button>
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default DashBoard;
