"use client";
import "./portfolio.scss";
import React from "./react/page";
import JavaScript from "./javaScript/page";
import Web from "./web/page";

export default function Home() {
  return (
    <main>
      <React />
      <JavaScript />
      <Web />
    </main>
  );
}
