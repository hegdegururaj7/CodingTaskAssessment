import React from "react";
import CostEstimator from "./CostEstimator";
import IntelligentScheduling from "./IntelligentScheduling";
import { Route, Routes } from "react-router-dom";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" element={<IntelligentScheduling />} />
      <Route  path="/scheduling" element={<IntelligentScheduling />} />
      <Route  path="/costEstimator" element= {<CostEstimator />} />
    </Routes>
  </main>
);

export default Main;
