import React from "react";
import image from "../images/main.jpg";

const Banner = () => {
  return (
    <>
      <div className="card text-bg-dark ">
        <img
          src={image}
          className="card-img"
          alt="..."
          style={{ maxHeight: "50vh" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start ps-5 ">
          <h1 className="card-title">Welcome. </h1>
          <h3 className="card-text">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
