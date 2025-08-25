import React, { useState } from "react";
import { Movie } from "../types";

interface MovieCardProps {
    movie: Movie;
    onRateMovie?: (movieId: number, rating: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onRateMovie }) => {
    const [showRatingForm, setShowRatingForm] = useState(false);
    const [userRating, setUserRating] = useState(movie.userRating || 0);

    const handleRateMovie = () => {
        if (onRateMovie && userRating > 0) {
            onRateMovie(movie.id, userRating);
            setShowRatingForm(false);
        }
    };

    const renderStars = (rating: number) => {
        return "⭐".repeat(Math.floor(rating)) + "☆".repeat(10 - Math.floor(rating));
    };

    return (
        <div className="movie-card">
            <div className="movie-image-container">
                <img src={movie.image} alt={movie.title} className="movie-image" />
                <div className="genre-tag">{movie.genre}</div>
            </div>
            <div className="movie-content">
                <div className="movie-header">
                    <h3 className="movie-title">{movie.title}</h3>
                    <div className="movie-actions">
                        <button className="action-btn heart-btn">❤</button>
                        <button className="action-btn share-btn">📤</button>
                    </div>
                </div>
                
                <div className="movie-info">
                    <p className="movie-year">{movie.year}</p>
                    <p className="movie-description">{movie.description}</p>
                </div>

                <div className="movie-rating">
                    <span className="rating-label">Rating:</span>
                    <div className="stars">{renderStars(movie.rating)}</div>
                    <span className="rating-text">{movie.rating}/10</span>
                </div>

                {movie.userRating && (
                    <div className="user-rating">
                        <span className="rating-label">Your Rating:</span>
                        <div className="stars">{renderStars(movie.userRating)}</div>
                        <span className="rating-text">{movie.userRating}/10</span>
                    </div>
                )}

                <div className="movie-actions-bottom">
                    <button 
                        className="rate-btn"
                        onClick={() => setShowRatingForm(!showRatingForm)}
                    >
                        {movie.userRating ? "Update Rating" : "Rate Movie"}
                    </button>
                    <button className="details-btn">Details →</button>
                </div>

                {showRatingForm && (
                    <div className="rating-form">
                        <div className="rating-input">
                            <label>Your Rating (1-10):</label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={userRating}
                                onChange={(e) => setUserRating(Number(e.target.value))}
                                className="rating-number"
                            />
                        </div>
                        <div className="rating-form-actions">
                            <button 
                                className="submit-rating-btn"
                                onClick={handleRateMovie}
                                disabled={userRating === 0}
                            >
                                Submit Rating
                            </button>
                            <button 
                                className="cancel-btn"
                                onClick={() => setShowRatingForm(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
