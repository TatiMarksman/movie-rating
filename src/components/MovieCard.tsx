import React, { useState } from "react";
import { Movie } from "../types";

interface MovieCardProps {
    movie: Movie;
    onRateMovie?: (movieId: number, rating: number, review: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onRateMovie }) => {
    const [showRatingForm, setShowRatingForm] = useState(false);
    const [userRating, setUserRating] = useState(movie.userRating || 0);
    const [userReview, setUserReview] = useState(movie.userReview || "");

    const handleRateMovie = () => {
        if (onRateMovie && userRating > 0) {
            onRateMovie(movie.id, userRating, userReview);
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
                    <span className="rating-label">Genel Puan:</span>
                    <div className="stars">{renderStars(movie.rating)}</div>
                    <span className="rating-text">{movie.rating}/10</span>
                </div>

                {movie.userRating && (
                    <div className="user-rating">
                        <span className="rating-label">Sizin Puanınız:</span>
                        <div className="stars">{renderStars(movie.userRating)}</div>
                        <span className="rating-text">{movie.userRating}/10</span>
                    </div>
                )}

                <div className="movie-actions-bottom">
                    <button 
                        className="rate-btn"
                        onClick={() => setShowRatingForm(!showRatingForm)}
                    >
                        {movie.userRating ? "Puanınızı Güncelleyin" : "Film Puanlayın"}
                    </button>
                    <button className="details-btn">Detaylar →</button>
                </div>

                {showRatingForm && (
                    <div className="rating-form">
                        <div className="rating-input">
                            <label>Puanınız (1-10):</label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={userRating}
                                onChange={(e) => setUserRating(Number(e.target.value))}
                                className="rating-number"
                            />
                        </div>
                        <div className="review-input">
                            <label>Yorumunuz:</label>
                            <textarea
                                value={userReview}
                                onChange={(e) => setUserReview(e.target.value)}
                                placeholder="Film hakkında düşüncelerinizi paylaşın..."
                                className="review-textarea"
                            />
                        </div>
                        <div className="rating-form-actions">
                            <button 
                                className="submit-rating-btn"
                                onClick={handleRateMovie}
                                disabled={userRating === 0}
                            >
                                Puanı Gönder
                            </button>
                            <button 
                                className="cancel-btn"
                                onClick={() => setShowRatingForm(false)}
                            >
                                İptal
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
