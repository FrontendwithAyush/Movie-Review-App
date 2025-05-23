import React, { useEffect, useState } from "react";
import Trending from "./Trending";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Trend = (props) => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const BASE_URL = "https://api.themoviedb.org/3";
  const Time = "day";

  const [Results, setResult] = useState([]);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);

  const TrendingUrl = async () => {
    try {
      setLoading(true);
      props.setProgress(15);
      const url = `${BASE_URL}/trending/${props.Search}/${Time}?api_key=${API_KEY}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setResult(parsedData.results);
      props.setProgress(30);
      setLoading(false);
    } catch (error) {
      alert("api not trending responding");
    }
  };
  useEffect(() => {
    TrendingUrl();
    // eslint-disable-next-line
  }, []);
  const handleCardClick = (id, Search) => {
    navigate(`/details/${Search}/${id}`);
  };

  return (
    <>
      {Loading && <Spinner />}
      <div className="container ">
        <div className="container mt-4 ">
          <h3>Trending </h3>
          <div className="d-flex overflow-auto gap-3 py-3">
            {Results.map((element) => {
              return (
                <div key={element.id}>
                  <Trending
                    image={element.poster_path}
                    title={element.title}
                    date={element.release_date}
                    name={element.name}
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

export default Trend;
