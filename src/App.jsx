import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {SignUp} from "./pages/Signup";
import {SignIn} from "./pages/Signin";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
