import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import SickLeavesHolidays from "./pages/SickLeavesHolidays";
import Users from "./pages/Users";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
