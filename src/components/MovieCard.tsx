import React from "react";
import { Movie } from "../types";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <h3>{movie.title} ({movie.year})</h3>
            <p>Rating: {movie.rating}/10</p>
        </div>
    );
};

export default MovieCard;
