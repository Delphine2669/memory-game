"use client";

import React from "react";
import Head from "next/head";
import Grid from "../components/Grid";
import Game from "../components/Game";
import MyContext from "./MyContext";
import "./page.css";
import logo from "/public/logo.png";

export default function Home() {
  return (
    <>
      <main>
        <div className="Header">
          <img src="/logo.png" alt="" className="logo" />
          <h1>MEMORY GAME </h1>
        </div>

        <Game />
      </main>
    </>
  );
}
