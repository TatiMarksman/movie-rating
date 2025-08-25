import React from "react";
import { Movie } from "./types";
import MovieList from "./components/MovieList";
import "./App.css";

const movies: Movie[] = [
    { id: 1, title: "Inception", rating: 8.8, year: 2010 },
    { id: 2, title: "The Matrix", rating: 8.7, year: 1999 },
    { id: 3, title: "Interstellar", rating: 8.6, year: 2014 },
];

function App() {
    return (
        <div className="App">
            <h1>Movie Ratings</h1>
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
