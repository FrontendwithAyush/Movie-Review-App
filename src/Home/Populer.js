import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import { useNavigate } from "react-router-dom";

const Populer = (props) => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const [Results, setResult] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      props.setProgress(60);
      const url = `${BASE_URL}/discover/${props.Search}?api_key=${API_KEY}&with_watch_providers=119&watch_region=IN`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setResult(parsedData.results);
      props.setProgress(70);
    } catch (error) {
      alert("api not populer responding");
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const handleCardClick = (id, Search) => {
    navigate(`/details/${Search}/${id}`);
  };
  return (
    <>
      <div className="container ">
        <div className="container mt-4 ">
          <h3>What's Popular </h3>
          <div className="d-flex overflow-auto gap-3 py-3">
            {Results.map((element) => {
              return (
                <div key={element.id}>
                  <Trending
                    image={element.poster_path}
                    title={element.original_title}
                    name={element.name}
                    date={element.release_date}
                    id={element.id}
                    onCardClick={handleCardClick}
                    Search={props.Search}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Populer;
