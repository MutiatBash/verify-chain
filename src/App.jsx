import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import HomeDashboard from "./components/HomeDashboard";
import ContractValidation from "./components/ContractValidation";
import {SignUp} from "./pages/Signup";
import {SignIn} from "./pages/Signin";
import "./App.css";

function App() {

  return (
    <div className="flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home-dashboard" element={<HomeDashboard />} />
          <Route path="contract-validation" element={<ContractValidation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
