import { IMovieItem } from '../movies/movies';

export interface IMovieResults {
  page: number;
  results: IMovieItem[];
  total_results: number;
  total_pages: number;
}
