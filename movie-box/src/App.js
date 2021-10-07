import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieItem from "./components/Movies/Movie";
import axios from "axios";
import AddMovieForm from "./components/Form/AddMovieForm";
import MovieData from "./components/Movies/MovieData";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          "http://www.omdbapi.com/?s=harry%20potter&apikey=e0620bd4"
        );

        const moviesData = await res.data.Search;
        console.log(moviesData);

        setMovieList(moviesData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  const onAddMovie = (newMovie) => {
    const newMovies = [newMovie, ...movieList];

    return setMovieList({ movieList: newMovies });
  };
  console.log(movieList);
  return (
    <Router>
      <AddMovieForm onAddMovie={onAddMovie} movies={movieList} />
      <MovieData movieList={movieList} />
      <Switch>
        <Route exact path="/:imdbID">
          <MovieItem movieList={movieList} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
