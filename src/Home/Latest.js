import React, { useEffect, useState } from "react";
import Trailers from "./Trailers";

const Latest = (props) => {
  const [Results, setResult] = useState([]);

  const fetchData = async () => {
    try {
      const url = `https://api.themoviedb.org/3/${props.Search}/now_playing?api_key=141ec65fdbc7fdccd76e51fac613c0f5&watch_region=IN`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setResult(parsedData.results);
      props.setProgress(40);
    } catch (error) {
      alert("api not latest responding");
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const colors = {
    minHeight: "70vh",
    background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  };
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={colors}
      >
        <div className="container ">
          <div className="container mt-4 ">
            <h3>Latest Trailers </h3>
            <div className="d-flex overflow-auto gap-3 py-3">
              {Results.map((element) => {
                return (
                  <div key={element.id}>
                    <Trailers
                      Search={props.Search}
                      id={element.id}
                      poster={element.backdrop_path}
                      setProgress={props.setProgress}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
