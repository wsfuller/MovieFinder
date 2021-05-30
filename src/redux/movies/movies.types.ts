export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESSFUL = 'GET_MOVIES_SUCCESSFUL';
export const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED';

export interface IMovieItem {
  id: number;
  name: string;
}

export interface IMovies {
  data: IMovieItem[];
}

export interface IGetMovies {
  type: typeof GET_MOVIES;
}

export interface IGetMoviesSuccessful {
  type: typeof GET_MOVIES_SUCCESSFUL;
  payload: IMovies;
}

export interface IGetMoviesFailed {
  type: typeof GET_MOVIES_FAILED;
  payload: string;
}

export type MoviesDispatchTypes = IGetMovies | IGetMoviesSuccessful | IGetMoviesFailed;
