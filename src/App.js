import { useState,useEffect } from "react";
import React from "react";

import SearchIcon from'./search.svg';
import './App.css';
import MovieCard from "./moviecard";
const API_URL="http://www.omdbapi.com?apikey=c7e61daa";
 


// const movie1={
//     "Title": "The Good, the Bart, and the Loki",
//     "Year": "2021",
//     "imdbID": "tt14957270",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTI1NTM0NmYtNzZmMy00ZWJkLTliNDUtZmExMjRlY2ViNmM3XkEyXkFqcGdeQXVyMjMxOTcxOTI@._V1_SX300.jpg"
// }

const App=()=>{
    const [searchTerm, setSearchTerm] = useState("");
     const [movies, setMovies] = useState([]);

    const searchMovies=async (title)=>{

        const response =await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();

        setMovies(data.Search);
    } 

    useEffect(()=>{
       searchMovies('Loki');
    },[]);


    return (
        <div className="app">
        <h1>MovieLand</h1>
  
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
  
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
  };

    export default App;
