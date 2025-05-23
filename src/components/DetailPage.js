import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FullDetail from "./FullDetail";
import Spinner from "./Spinner";
import Trending from "../Home/Trending";
import { useNavigate } from "react-router-dom";

const DetailPage = (props) => {
  const { id, Search } = useParams();
  const [Results, setResult] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Cast, setCast] = useState([]);
  const navigate = useNavigate();
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const MovieDetail = async () => {
    try {
      setLoading(true);
      props.setProgress(10);
      const url = `https://api.themoviedb.org/3/${Search}/${id}?api_key=${API_KEY}&language=en-US`;
      props.setProgress(30);
      let data = await fetch(url);
      props.setProgress(50);
      let parsedData = await data.json();
      props.setProgress(80);
      setResult(parsedData);
      props.setProgress(100);

      const castUrl = `https://api.themoviedb.org/3/${Search}/${id}/credits?api_key=${API_KEY}`;
      let castData = await fetch(castUrl);
      let castParsedData = await castData.json();
      setCast(castParsedData.cast);
      setLoading(false);
    } catch (error) {
      alert("api not details responding");
    }
  };
  useEffect(() => {
    MovieDetail();
    // eslint-disable-next-line
  }, []);
  const handleCardClick = (id, Search) => {
    navigate(`/person/${id}`);
  };
  return (
    <>
      {Loading && <Spinner />}
      <FullDetail
        backImage={Results.backdrop_path}
        mainImage={Results.poster_path}
        title={Results.title}
        name={Results.original_name}
        date={Results.release_date}
        overview={Results.overview}
        tagline={Results.tagline}
        runtime={Results.runtime}
        vote_average={Results.vote_average}
        genres={Results.genres}
      />

      <div
        className="container d-flex justify-content-start"
        style={{ width: "100%" }}
      >
        <div
          className="container mt-4"
          style={{ maxWidth: "85%", marginLeft: "0" }}
        >
          <h3>Top Billed Cast </h3>
          <div className="d-flex overflow-auto gap-3 py-3">
            {Cast.map((element) => {
              return (
                <div key={element.id}>
                  <Trending
                    image={element.profile_path}
                    title={element.name}
                    date={element.character}
                    id={element.id}
                    Search={Search}
                    onCardClick={handleCardClick}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" d-flex flex-column align-items-start justify-content-center">
          <a
            href={Results.homepage}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <strong>Official Homepage</strong>
            </p>
          </a>
          <p>
            <strong>Status</strong>
          </p>
          <p>{Results.status}</p>
          <p>
            <strong>Original Language</strong>
          </p>
          <p>{Results.original_language}</p>

          {Results.budget > 0 && (
            <div>
              <p className="text-start">
                <strong>Budget</strong>
              </p>
              <p>${Results.budget}</p>
            </div>
          )}

          {Results.revenue > 0 && (
            <div>
              <p className="text-start">
                <strong>Revenue</strong>
              </p>
              <p>${Results.revenue}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
