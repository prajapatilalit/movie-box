import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieItem from "./components/Movies/MovieItem";
import axios from "axios";
import AddMovieForm from "./components/Form/AddMovieForm";
import MovieData from "./components/Movies/MovieData";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    try {
      const res = await axios.get(
        "http://www.omdbapi.com/?s=harry%20potter&apikey=e0620bd4"
      );

      const moviesData = await res.data.Search;
      // console.log(moviesData);

      setMovieList(moviesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const onAddMovie = (newMovie) => {
    const newMovies = [newMovie, ...movieList];

    return setMovieList(newMovies);
  };

  console.log([movieList]);
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <MovieData movieList={movieList} />
        </Route>
        <Route path="/addMovie">
          <AddMovieForm onAdd={onAddMovie} movieList={movieList} />
        </Route>
        <Route exact path="/:imdbID">
          <MovieItem />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
