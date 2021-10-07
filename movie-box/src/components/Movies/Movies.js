import React from "react";

const Movies = ({ movies }) => {
  return (
    <div className="container">
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.Poster} alt="poster-cover" />
          <h3>{movie.Title}</h3>
          <button>view</button>
        </div>
      ))}
    </div>
  );
};

export default Movies;
