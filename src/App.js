//import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
