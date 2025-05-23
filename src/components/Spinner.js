import React from "react";
import Loading from "../images/Loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={Loading} alt="Loading" />
    </div>
  );
};

export default Spinner;
