import React, { useEffect, useState } from "react";
import Final from "./Final";

const Trailers = (props) => {
  let { id, poster } = props;
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const [Results, setResult] = useState([]);
  const [Link, setLink] = useState("");

  const fetchData = async () => {
    try {
      const url = `https://api.themoviedb.org/3/${props.Search}/${id}/videos?api_key=${API_KEY}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setResult(parsedData.results[0].key);
      props.setProgress(50);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Final poster={poster} link={Results} />
    </>
  );
};

export default Trailers;
