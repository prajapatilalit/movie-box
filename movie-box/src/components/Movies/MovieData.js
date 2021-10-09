import React from "react";
import { Link } from "react-router-dom";

const MovieData = ({ movieList }) => {
  return (
    <div className="container">
      {movieList.map((movie, index) => (
        <div className="movie_item" key={index}>
          <img src={movie.Poster} alt="poster-cover" />
          <p>{movie.Title}</p>
          <Link to={`/${movie.imdbID}`}>
            <button className="btn">view</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieData;
