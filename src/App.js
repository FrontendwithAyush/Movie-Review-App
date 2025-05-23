import "./App.css";
import DetailPage from "./components/DetailPage";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Tvshow from "./components/Tvshow";
import Person from "./components/Person";
import Footer from "./components/Footer";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar />
        <LoadingBar color="#1abc9c" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home Search="movie" setProgress={setProgress} />}
          />
          <Route
            exact
            path="/tv"
            element={<Tvshow Search="tv" setProgress={setProgress} />}
          />
          <Route
            path="/details/:Search/:id"
            element={<DetailPage setProgress={setProgress} />}
          />
          <Route
            path="/Movies/:input"
            element={<Movies Search="movie" setProgress={setProgress} />}
          />
          <Route
            path="/person/:id"
            element={<Person setProgress={setProgress} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
