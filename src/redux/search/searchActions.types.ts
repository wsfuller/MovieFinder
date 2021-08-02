import { IMovieResults } from './searchResults';

export const GET_SEARCH_MOVIES = 'GET_SEARCH_MOVIES';
export const GET_SEARCH_MOVIES_SUCCESSFUL = 'GET_SEARCH_MOVIE_SUCCESSFUL';
export const GET_SEARCH_MOVIES_FAILED = 'GET_SEARCH_MOVIES_FAILED';

export const CLEAR_SEARCH_MOVIES = 'CLEAR_SEARCH_MOVIES';

export interface IGetSearchMovies {
  type: typeof GET_SEARCH_MOVIES;
}

export interface IGetSearchMoviesSuccessful {
  type: typeof GET_SEARCH_MOVIES_SUCCESSFUL;
  payload: IMovieResults;
}

export interface IGetSearchMoviesFailed {
  type: typeof GET_SEARCH_MOVIES_FAILED;
  payload: string;
}

export interface IClearSearchMovies {
  type: typeof CLEAR_SEARCH_MOVIES;
}

export type SearchDispatchTypes =
  | IGetSearchMovies
  | IGetSearchMoviesSuccessful
  | IGetSearchMoviesFailed
  | IClearSearchMovies;
