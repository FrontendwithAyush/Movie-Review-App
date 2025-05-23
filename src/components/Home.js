import React from "react";
import Banner from "../Home/Banner";
import Trend from "../Home/Trend";
import Latest from "../Home/Latest";
import Populer from "../Home/Populer";
import Free from "../Home/Free";

const Home = (props) => {
  return (
    <>
      <Banner />
      <Trend Search={props.Search} setProgress={props.setProgress} />
      <Latest Search={props.Search} setProgress={props.setProgress} />
      <Populer Search={props.Search} setProgress={props.setProgress} />
      <Free Search={props.Search} setProgress={props.setProgress} />
    </>
  );
};

export default Home;
