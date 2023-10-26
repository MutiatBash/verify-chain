import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
