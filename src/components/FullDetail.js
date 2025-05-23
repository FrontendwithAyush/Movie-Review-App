import React from "react";

const FullDetail = (props) => {
  let {
    backImage,
    mainImage,
    title,
    date,
    overview,
    tagline,
    runtime,
    vote_average,
    name,
    genres,
  } = props;

  return (
    <>
      <div
        className="text-white p-4"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.9), rgba(3, 37, 65, 0.5)), url(https://image.tmdb.org/t/p/original${backImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${mainImage}`}
                alt={title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8 d-flex flex-column align-items-start justify-content-evenly ">
              <h1>
                {title || name}
                {date && (
                  <span className="text-muted">({date?.slice(0, 4)})</span>
                )}
              </h1>
              {genres && genres.length > 0 && (
                <p>
                  {genres.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index < genres.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              )}
              <div className="d-flex align-items-center gap-2">
                <div
                  className="score-ring"
                  style={{ "--score": Math.round(vote_average * 10) }}
                >
                  <span>{Math.round(vote_average * 10)}%</span>
                </div>
                <strong>User Score</strong>
              </div>

              <p className="fst-italic">{tagline}</p>
              <h4>Overview</h4>
              <p className="text-start">{overview}</p>
              {date && (
                <p className="text-start">
                  <strong>Release Date:</strong> {date}
                </p>
              )}
              {runtime && (
                <p className="text-start">
                  <strong>Runtime:</strong> {runtime} minutes
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullDetail;
