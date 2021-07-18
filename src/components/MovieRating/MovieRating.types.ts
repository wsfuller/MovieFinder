import { IMovie } from '../../redux/movies/movies';

interface IMovieRatingProps {
  voteAverage: IMovie['vote_average'];
  voteCount: IMovie['vote_count'];
  hasBackground?: boolean;
}

export default IMovieRatingProps;
