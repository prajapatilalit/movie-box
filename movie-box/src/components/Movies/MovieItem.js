import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const MovieItem = () => {
  const [detail, setDetail] = useState([]);
  const { imdbID } = useParams();
  // const movieDetail = movieList[parseInt(imdbID, 10)];
  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?i=${imdbID}&apikey=e0620bd4`
        );

        const movieDetail = await res.data;
        console.log(movieDetail);

        setDetail(movieDetail);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetail();
  }, [imdbID]);
  return (
    <div>
      <img src={detail.Poster} alt="single-poster" />
      <h4>{detail.Title}</h4>
    </div>
  );
};

export default MovieItem;
