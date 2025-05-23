import React from "react";

const Final = (props) => {
  let { link, poster } = props;

  const trailerUrl = `https://www.youtube.com/watch?v=${link}`;
  const ImageUrl = `https://image.tmdb.org/t/p/original${poster}`;
  return (
    <>
      <div className="card" style={{ minWidth: "22rem" }}>
        <div className="card-body">
          <a href={trailerUrl} target="_blank">
            <div className="card" style={{ width: "21rem" }}>
              <img
                src={ImageUrl}
                className="card-img-top"
                alt="image not found"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Final;
