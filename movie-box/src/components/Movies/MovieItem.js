import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const MovieItem = () => {
  const [detail, setDetail] = useState([]);
  const { imdbID } = useParams();

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?i=${imdbID}&apikey=e0620bd4`
        );

        const movieDetail = await res.data;
        // console.log(movieDetail);

        setDetail(movieDetail);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetail();
  }, [imdbID]);
  return (
    <div className="details">
      <div>
        <img src={detail.Poster} alt="single-poster" />
      </div>
      <div>
        <h3>Title: {detail.Title}</h3>
        <h4>Genre: {detail.Genre}</h4>
        <p>Country: {detail.Country}</p>
        <p>Awards: {detail.Awards}</p>
        <p>Language: {detail.Language}</p>
        <p>Writer: {detail.Writer}</p>
        <p>imdbRating: {detail.imdbRating}</p>
        <p>BoxOffice: {detail.BoxOffice}</p>
        <p>Production: {detail.Production}</p>
      </div>
    </div>
  );
};

export default MovieItem;
