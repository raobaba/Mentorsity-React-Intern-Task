import React from "react";
import { Routes, Route } from "react-router-dom";
import ForexSymbols from "../components/ForexSymbols.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<ForexSymbols />} />
    </Routes>
  );
}

export default Routing;
