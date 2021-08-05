import { IMovieItem } from '../../redux/movies/movies';

interface IMoviesCarouselProps {
  movies: IMovieItem[];
  /** This is used for event tracking. Use the same name as what is displayed in UI section title */
  carouselName: string;
}

export default IMoviesCarouselProps;
