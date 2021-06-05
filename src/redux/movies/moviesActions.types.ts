import { INowPlayingMovies } from './movies';

export const GET_NOW_PLAYING_MOVIES = 'GET_NOW_PLAYING_MOVIES';
export const GET_NOW_PLAYING_MOVIES_SUCCESSFUL = 'GET_NOW_PLAYING_MOVIES_SUCCESSFUL';
export const GET_NOW_PLAYING_MOVIES_FAILED = 'GET_NOW_PLAYING_MOVIES_FAILED';

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

export type MoviesDispatchTypes = IGetNowPlayingMovies | IGetNowPlayingMoviesSuccessful | IGetNowPlayingMoviesFailed;
