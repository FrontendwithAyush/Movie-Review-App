import React from "react";
import Trending from "../Home/Trending";
import { useNavigate } from "react-router-dom";

const Detailperson = (props) => {
  let { mainImage, title, date, KnownFor, name, gender, Cast } = props;
  const navigate = useNavigate();
  const Search = "movie";

  const getGenderLabel = (code) => {
    if (code === 1) {
      return "Female";
    } else if (code === 2) {
      return "Male";
    } else if (code === 3) {
      return "Non-binary";
    } else {
      return "Not specified";
    }
  };
  const handleCardClick = (id, Search) => {
    navigate(`/details/${Search}/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${mainImage}`}
              alt={title || name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8 d-flex flex-column align-items-start justify-content-start ">
            <h1>{title || name}</h1>

            <h4>Personal Info</h4>

            {date && (
              <p className="text-start">
                <strong> Birthday</strong>
                <br /> {date}
              </p>
            )}
            {KnownFor && (
              <p className="text-start">
                <strong>Known For</strong>
                <br /> {KnownFor}
              </p>
            )}
            {gender && (
              <p>
                <strong>Gender:</strong>
                <br />
                {getGenderLabel(gender)}
              </p>
            )}
            <div className="container ">
              <div className="container mt-4 ">
                <h3> Movies / Tv Shows </h3>
                <div className="d-flex overflow-auto gap-3 py-3">
                  {Cast.slice(0, 10).map((element) => {
                    return (
                      <div key={element.id}>
                        <Trending
                          image={element.poster_path}
                          title={element.title}
                          date={element.release_date}
                          id={element.id}
                          onCardClick={handleCardClick}
                          Search={Search}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailperson;
