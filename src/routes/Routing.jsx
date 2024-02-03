import React from "react";
import { Routes, Route } from "react-router-dom";
import ForexSymbols from "../components/ForexSymbols.jsx";
import ExchangeRates from "../components/ExchangesRate.jsx";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<ForexSymbols />} />
      <Route path="/exchange" element={<ExchangeRates/>} />
    </Routes>
  );
}

export default Routing;
