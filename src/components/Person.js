import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import Detailperson from "./Detailperson";

const Person = (props) => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const [Cast, setCast] = useState([]);
  const [Results, setResult] = useState("");
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const personDetail = async () => {
    try {
      setLoading(true);
      props.setProgress(10);
      const url = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`;
      props.setProgress(30);
      let data = await fetch(url);
      props.setProgress(50);
      let parsedData = await data.json();
      props.setProgress(80);
      setResult(parsedData);
      props.setProgress(100);

      const castUrl = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${API_KEY}&language=en-US`;
      let castData = await fetch(castUrl);
      let castParsedData = await castData.json();
      setCast(castParsedData.cast);
      setLoading(false);
    } catch (error) {
      alert("api not person responding");
    }
  };
  useEffect(() => {
    personDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      <Detailperson
        mainImage={Results.profile_path}
        name={Results.name}
        date={Results.birthday}
        KnownFor={Results.known_for_department}
        gender={Results.gender}
        Cast={Cast}
      />
    </>
  );
};

export default Person;
