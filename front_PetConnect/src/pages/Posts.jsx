import React from "react";
import Leftsidebar from "../components/Leftsidebar";
import Maincontent from "../components/Maincontent";
import Navbar from "../components/Navbar";
import Rightsidebar from "../components/Rightsidebar";
import "../css/Posts.css";

export default function Posts() {
  return (
    <>
      <Navbar />
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <Leftsidebar />
          <Maincontent />
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}