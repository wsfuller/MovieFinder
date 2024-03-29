import { IMovie, INowPlayingMovies, IPopularMovies, IUpcomingMovies, IWatchLaterItem } from './movies';

export const GET_NOW_PLAYING_MOVIES = 'GET_NOW_PLAYING_MOVIES';
export const GET_NOW_PLAYING_MOVIES_SUCCESSFUL = 'GET_NOW_PLAYING_MOVIES_SUCCESSFUL';
export const GET_NOW_PLAYING_MOVIES_FAILED = 'GET_NOW_PLAYING_MOVIES_FAILED';

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const GET_POPULAR_MOVIES_SUCCESSFUL = 'GET_POPULAR_MOVIES_SUCCESSFUL';
export const GET_POPULAR_MOVIES_FAILED = 'GET_POPULAR_MOVIES_FAILED';

export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';
export const GET_UPCOMING_MOVIES_SUCCESSFUL = 'GET_UPCOMING_MOVIES_SUCCESSFUL';
export const GET_UPCOMING_MOVIES_FAILED = 'GET_UPCOMING_MOVIES_FAILED';

export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIE_SUCCESSFUL = 'GET_MOVIE_SUCCESSFUL';
export const GET_MOVIE_FAILED = 'GET_MOVIE_FAILED';

export const CLEAR_SELECTED_MOVIE = 'CLEAR_SELECTED_MOVIE';

export const ADD_WATCH_LATER_MOVIES = 'ADD_WATCH_LATER_MOVIES';
export const ADD_WATCH_LATER_MOVIE = 'ADD_WATCH_LATER_MOVIE';
export const REMOVE_WATCH_LATER_MOVIE = 'REMOVE_WATCH_LATER_MOVIE';

export interface IGetNowPlayingMovies {
  type: typeof GET_NOW_PLAYING_MOVIES;
}

export interface IGetNowPlayingMoviesSuccessful {
  type: typeof GET_NOW_PLAYING_MOVIES_SUCCESSFUL;
  payload: INowPlayingMovies;
}

export interface IGetNowPlayingMoviesFailed {
  type: typeof GET_NOW_PLAYING_MOVIES_FAILED;
  payload: string;
}

export interface IGetPopularMovies {
  type: typeof GET_POPULAR_MOVIES;
}

export interface IGetPopularMoviesSuccessful {
  type: typeof GET_POPULAR_MOVIES_SUCCESSFUL;
  payload: IPopularMovies;
}

export interface IGetPopularMoviesFailed {
  type: typeof GET_POPULAR_MOVIES_FAILED;
  payload: string;
}

export interface IGetUpcomingMovies {
  type: typeof GET_UPCOMING_MOVIES;
}

export interface IGetUpcomingMoviesSuccessful {
  type: typeof GET_UPCOMING_MOVIES_SUCCESSFUL;
  payload: IUpcomingMovies;
}

export interface IGetUpcomingMoviesFailed {
  type: typeof GET_UPCOMING_MOVIES_FAILED;
  payload: string;
}

export interface IGetMovie {
  type: typeof GET_MOVIE;
}

export interface IGetMovieSuccessful {
  type: typeof GET_MOVIE_SUCCESSFUL;
  payload: IMovie;
}

export interface IGetMovieFailed {
  type: typeof GET_MOVIE_FAILED;
  payload: string;
}

export interface IClearSelectedMovie {
  type: typeof CLEAR_SELECTED_MOVIE;
}

export interface IAddWatchLaterMovies {
  type: typeof ADD_WATCH_LATER_MOVIES;
  payload: IWatchLaterItem[];
}

export interface IAddWatchLaterMovie {
  type: typeof ADD_WATCH_LATER_MOVIE;
  payload: IWatchLaterItem;
}

export interface IRemoveWatchLaterMovie {
  type: typeof REMOVE_WATCH_LATER_MOVIE;
  payload: number;
}

export type MoviesDispatchTypes =
  | IGetNowPlayingMovies
  | IGetNowPlayingMoviesSuccessful
  | IGetNowPlayingMoviesFailed
  | IGetPopularMovies
  | IGetPopularMoviesSuccessful
  | IGetPopularMoviesFailed
  | IGetUpcomingMovies
  | IGetUpcomingMoviesSuccessful
  | IGetUpcomingMoviesFailed
  | IGetMovie
  | IGetMovieSuccessful
  | IGetMovieFailed
  | IClearSelectedMovie
  | IAddWatchLaterMovies
  | IAddWatchLaterMovie
  | IRemoveWatchLaterMovie;
