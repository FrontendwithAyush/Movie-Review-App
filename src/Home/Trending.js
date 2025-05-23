import React from "react";

const Trending = (props) => {
  let { id, onCardClick, Search } = props;

  const ImageUrl = `https://image.tmdb.org/t/p/original${props.image}`;
  return (
    <>
      <div
        className="card"
        style={{ minWidth: "11rem" }}
        onClick={() => onCardClick(id, Search)}
      >
        <div className="card-body">
          <div className="card" style={{ width: "10rem" }}>
            <img
              src={ImageUrl}
              className="card-img-top"
              alt=""
              onError={(e) => {
                e.target.onerror = null; // prevents infinite loop
                e.target.src =
                  "https://www.shutterstock.com/image-illustration/404-error-page-not-found-260nw-308387615.jpg";
              }}
            />
            <div className="card-body">
              <h6 className="card-title"> {props.title || props.name}</h6>
              <p className="card-text">
                <small>{props.date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
