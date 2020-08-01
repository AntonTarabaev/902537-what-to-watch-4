export enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`,
}

export interface Film {
  id: string;
  title: string;
  poster: string;
  bgImage: string;
  previewImage: string;
  releaseYear: number;
  genre: string;
  rating: number;
  ratingVotes: number;
  director: string;
  description: string;
  actors: string[];
  preview: string;
  duration: number;
  video: string;
  isFavorite: boolean;
}

export interface Comment {
  id: number;
  author: string;
  authorId: number;
  comment: string;
  date: Date;
  rating: number;
}
