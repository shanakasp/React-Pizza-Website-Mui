import React from 'react';
import BannerImage from "../assets/pizza.jpeg"
import { Link } from "react-router-dom";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
      <h1> Prince Pizza </h1>
      <p> PIZZA TO FIT ANY TASTE</p>
      <Link to="/menu">
        <button> ORDER NOW </button>
      </Link>
    </div>
  </div>
  );
}

export default Home;
