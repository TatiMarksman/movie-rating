import React from "react";
import { Movie } from "./types";
import MovieList from "./components/MovieList";
import "./App.css";

const movies: Movie[] = [
    { 
        id: 1, 
        title: "Супермен", 
        rating: 8.5, 
        year: 1978,
        genre: "ЭКШН",
        description: "Kripton gezegeninden gelen süper güçlere sahip bir kahramanın hikayesi.",
        image: "https://via.placeholder.com/120x180/0066cc/ffffff?text=Superman"
    },
    { 
        id: 2, 
        title: "Одинокий странник", 
        rating: 7.8, 
        year: 2013,
        genre: "ВЕСТЕРН",
        description: "Vahşi batıda geçen macera dolu bir western filmi.",
        image: "https://via.placeholder.com/120x180/8B4513/ffffff?text=Lone+Ranger"
    },
    { 
        id: 3, 
        title: "Inception", 
        rating: 8.8, 
        year: 2010,
        genre: "НАУЧНАЯ ФАНТАСТИКА",
        description: "Rüyaların içinde geçen zihin bükücü bir bilim kurgu filmi.",
        image: "https://via.placeholder.com/120x180/2c3e50/ffffff?text=Inception"
    },
    { 
        id: 4, 
        title: "The Dark Knight", 
        rating: 9.0, 
        year: 2008,
        genre: "ЭКШН",
        description: "Batman'in Joker ile mücadelesini anlatan kara bir süper kahraman filmi.",
        image: "https://via.placeholder.com/120x180/000000/ffffff?text=Dark+Knight"
    },
    { 
        id: 5, 
        title: "Pulp Fiction", 
        rating: 8.9, 
        year: 1994,
        genre: "КРИМИНАЛ",
        description: "Los Angeles'ta geçen birbirine bağlı suç hikayeleri.",
        image: "https://via.placeholder.com/120x180/FFD700/000000?text=Pulp+Fiction"
    }
];

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1>🎬 Movie Rating</h1>
                <p>Rate and review your favorite movies</p>
            </header>
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
