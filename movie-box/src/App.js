import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieItem from "./components/Movies/Movie";
import Movies from "./components/Movies/Movies";
import axios from "axios";
import AddMovieForm from "./components/Form/AddMovieForm";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          "http://www.omdbapi.com/?s=harry%20potter&apikey=e0620bd4"
        );

        const moviesData = await res.data.Search;
        console.log(moviesData);

        setMovies(moviesData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  const onAddMovie = (newMovie) => {
    const newMovies = [newMovie, ...movies];

    return setMovies({ movies: newMovies });
  };
  return (
    <Router>
      <AddMovieForm onAddMovie={onAddMovie} />
      <Movies movies={movies} />
      <Switch>
        <Route exact path="/:imdbID">
          <MovieItem movies={movies} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
