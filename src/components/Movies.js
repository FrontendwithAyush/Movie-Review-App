import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Trending from "../Home/Trending";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Movies = (props) => {
  const { input } = useParams();
  const [Results, setResult] = useState([]);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const searchMovies = async () => {
    try {
      setLoading(true);
      props.setProgress(15);
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`;
      props.setProgress(45);
      let data = await fetch(url);
      props.setProgress(65);
      let parsedData = await data.json();
      props.setProgress(85);
      setResult(parsedData.results);
      props.setProgress(100);
      setLoading(false);
    } catch (error) {
      alert("api not Movies responding");
    }
  };
  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line
  }, [input]);
  const handleCardClick = (id, Search) => {
    navigate(`/details/${Search}/${id}`);
  };
  return (
    <>
      {Loading && <Spinner />}
      <div className="container ">
        <div className="container mt-4 ">
          <h3>Movies - {input} </h3>
          <div className="d-flex overflow-auto gap-3 py-3">
            {Results.map((element) => {
              return (
                <div key={element.id}>
                  <Trending
                    image={element.poster_path}
                    title={element.original_title}
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

export default Movies;
