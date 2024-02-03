import React from "react";
import "../styles/Home.css";
import Routing from "../routes/Routing";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Enter your search..."
          />
        </div>
        <div className="button-group">
          <button className="symbol-button">
            <Link to="/" style={{ textDecoration: "none" }}>
              Supported Symbol
            </Link>
          </button>
          <button className="live-rates-button">
            <Link to="/exchange" style={{ textDecoration: "none" }}>
              Live Rates
            </Link>
          </button>
          <button className="historical-rates-button">
            <Link to="/historical" style={{ textDecoration: "none" }}>
              Historical Rates
            </Link>
          </button>
          <button className="convert-button">
            <Link to="/currency" style={{ textDecoration: "none" }}>
              Currency Convert
            </Link>
          </button>
          <button className="timeframe-button">
            <Link to="/time-frame" style={{ textDecoration: "none" }}>
              TimeFrame Query
            </Link>
          </button>
          <button className="change-query-button">
            <Link to="/change" style={{ textDecoration: "none" }}>
              Change Query
            </Link>
          </button>
        </div>
      </div>
      <div className="random-routes">
        <Routing />
      </div>
    </>
  );
}

export default Home;
