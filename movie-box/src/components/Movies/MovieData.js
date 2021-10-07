import React from "react";

const MovieData = ({ movieList }) => {
  return (
    <div className="container">
      {movieList.map((movie, index) => (
        <div key={index}>
          <img src={movie.Poster} alt="poster-cover" />
          <h3>{movie.Title}</h3>
          <button>view</button>
        </div>
      ))}
    </div>
  );
};

export default MovieData;
