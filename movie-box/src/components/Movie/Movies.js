import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
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

  return (
    <div className="container">
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.Poster} alt="poster-cover" />
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Movies;
