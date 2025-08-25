// src/types.ts
export interface Movie {
    id: number;
    title: string;
    rating: number; // 0-10 arası
    year: number;
    genre: string;
    description: string;
    image: string;
    userRating?: number; // Kullanıcının verdiği puan
    userReview?: string; // Kullanıcının yorumu
}

export interface UserRating {
    movieId: number;
    rating: number;
    review: string;
    date: Date;
}
