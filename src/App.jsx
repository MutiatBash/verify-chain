import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeDashboard from "./components/HomeDashboard";
import Dashboard from "./pages/Dashboard";
import Account from "./components/Account";
import ContractValidation from "./components/ContractValidation";
import Validation from "./components/Validation";
import { SignUp } from "./pages/Signup";
import { SignIn } from "./pages/Signin";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<HomeDashboard />} />
          <Route path="contract-validation" element={<ContractValidation />} >
                    <Route index element={<Validation />} />
          </Route>
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
