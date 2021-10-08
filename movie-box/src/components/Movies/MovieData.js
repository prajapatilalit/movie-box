import React from "react";
import { Link } from "react-router-dom";

const MovieData = ({ movies }) => {
  return (
    <div className="container">
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.Poster} alt="poster-cover" />
          <h3>{movie.Title}</h3>
          <Link to={`/${movie.imdbID}`}>
            <button>view</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieData;
