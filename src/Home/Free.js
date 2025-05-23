import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import { useNavigate } from "react-router-dom";

const Free = (props) => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const [Results, setResult] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      props.setProgress(80);
      const url = `${BASE_URL}/discover/${props.Search}?api_key=${API_KEY}&with_watch_providers=192&with_watch_monetization_types=free`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setResult(parsedData.results);
      props.setProgress(100);
    } catch (error) {
      alert("api not free responding");
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
          <h3>Free To Watch </h3>
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

export default Free;
