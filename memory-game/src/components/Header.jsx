import { NavLink } from "react-router-dom";

import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <img src="/logo.png" alt="" className="logo" />
      <h1>MEMORY GAME </h1>
    </div>
  );
}
