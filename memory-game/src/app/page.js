"use client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Game from "../components/Game";
import MyContext from "./MyContext";
import "./page.css";
import ChildGame from "../components/ChildGame";
import Home from "@/components/Homepage";

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <NavLink to="/" className="home-navlink">
          Home
        </NavLink>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/level1" element={<ChildGame />} />
          <Route path="/level2" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}
