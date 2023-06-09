import React from "react"
import Movie from "../Movie/Movie";
import { useState, useEffect } from "react";
import axios from 'axios';

async function fetchMovies() {
  const movies = await axios.get("http://localhost:9000/movies");
  return movies.data;
}
const showMovie = (movie) => {
    return (
        <Movie movie={movie} />
    );
}
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  
  async function postRenderedHandler() {
    const moviesFromServer = await fetchMovies();
    setMovies(moviesFromServer);
  } 

  function nonAsyncPostRenderedHandler(){
    postRenderedHandler();
  }
  useEffect(nonAsyncPostRenderedHandler);
    return (
        <div>
            {movies.map(showMovie)}
        </div>
    );
}
export default MovieList;