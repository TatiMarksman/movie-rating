import React, { useState } from "react";
import { Movie } from "../types";
import MovieCard from "./MovieCard";

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies: initialMovies }) => {
    const [movies, setMovies] = useState<Movie[]>(initialMovies);
    const [sortBy, setSortBy] = useState<string>("title");
    const [filterGenre, setFilterGenre] = useState<string>("all");

    const handleRateMovie = (movieId: number, rating: number) => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === movieId
                    ? { ...movie, userRating: rating }
                    : movie
            )
        );
    };

    const getUniqueGenres = () => {
        const genres = movies.map(movie => movie.genre);
        return ["all", ...Array.from(new Set(genres))];
    };

    const filteredAndSortedMovies = movies
        .filter(movie => filterGenre === "all" || movie.genre === filterGenre)
        .sort((a, b) => {
            switch (sortBy) {
                case "title":
                    return a.title.localeCompare(b.title);
                case "year":
                    return b.year - a.year;
                case "rating":
                    return b.rating - a.rating;
                case "userRating":
                    return (b.userRating || 0) - (a.userRating || 0);
                default:
                    return 0;
            }
        });

    return (
        <div className="movie-list-container">
            <div className="controls">
                <div className="filter-controls">
                    <label htmlFor="genre-filter">Filter by Genre:</label>
                    <select
                        id="genre-filter"
                        value={filterGenre}
                        onChange={(e) => setFilterGenre(e.target.value)}
                        className="filter-select"
                    >
                        {getUniqueGenres().map(genre => (
                            <option key={genre} value={genre}>
                                {genre === "all" ? "All" : genre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="sort-controls">
                    <label htmlFor="sort-by">Sort by:</label>
                    <select
                        id="sort-by"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="sort-select"
                    >
                        <option value="title">By Title</option>
                        <option value="year">By Year</option>
                        <option value="rating">By Rating</option>
                        <option value="userRating">By Your Rating</option>
                    </select>
                </div>
            </div>

            <div className="movie-stats">
                <p>Found {filteredAndSortedMovies.length} movies</p>
                {filteredAndSortedMovies.length > 0 && (
                    <p>
                        Average Rating: {
                            (filteredAndSortedMovies.reduce((sum, movie) => sum + movie.rating, 0) / filteredAndSortedMovies.length).toFixed(1)
                        }/10
                    </p>
                )}
            </div>

            <div className="movie-grid">
                {filteredAndSortedMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onRateMovie={handleRateMovie}
                    />
                ))}
            </div>

            {filteredAndSortedMovies.length === 0 && (
                <div className="no-movies">
                    <p>No movies found matching these criteria.</p>
                </div>
            )}
        </div>
    );
};

export default MovieList;
