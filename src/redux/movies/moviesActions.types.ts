import { INowPlayingMovies, IPopularMovies, IUpcomingMovies } from './movies';

export const GET_NOW_PLAYING_MOVIES = 'GET_NOW_PLAYING_MOVIES';
export const GET_NOW_PLAYING_MOVIES_SUCCESSFUL = 'GET_NOW_PLAYING_MOVIES_SUCCESSFUL';
export const GET_NOW_PLAYING_MOVIES_FAILED = 'GET_NOW_PLAYING_MOVIES_FAILED';

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const GET_POPULAR_MOVIES_SUCCESSFUL = 'GET_POPULAR_MOVIES_SUCCESSFUL';
export const GET_POPULAR_MOVIES_FAILED = 'GET_POPULAR_MOVIES_FAILED';

export const GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES';
export const GET_UPCOMING_MOVIES_SUCCESSFUL = 'GET_UPCOMING_MOVIES_SUCCESSFUL';
export const GET_UPCOMING_MOVIES_FAILED = 'GET_UPCOMING_MOVIES_FAILED';

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

export type MoviesDispatchTypes =
  | IGetNowPlayingMovies
  | IGetNowPlayingMoviesSuccessful
  | IGetNowPlayingMoviesFailed
  | IGetPopularMovies
  | IGetPopularMoviesSuccessful
  | IGetPopularMoviesFailed
  | IGetUpcomingMovies
  | IGetUpcomingMoviesSuccessful
  | IGetUpcomingMoviesFailed;
