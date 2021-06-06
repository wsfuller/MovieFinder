import { IMovieItem } from '../../redux/movies/movies';

export enum SortMoviesBy {
  Popularity = 'popularity',
  VoteAverage = 'vote_average',
  ReleaseDate = 'release_date',
}

export interface ISortBy {
  key: SortMoviesBy;
  direction?: 'ascending' | 'descending';
}

export const sortMoviesBy = (sortBy: ISortBy, movieList: IMovieItem[]): IMovieItem[] => {
  const sortMovieList = [...movieList].sort((a, b) => {
    if (sortBy.key === SortMoviesBy.ReleaseDate) {
      const aReleaseDate = new Date(a.release_date.replaceAll('-', ',')).getTime();
      const bReleaseDate = new Date(b.release_date.replaceAll('-', ',')).getTime();

      return sortBy.direction === 'descending' ? bReleaseDate - aReleaseDate : aReleaseDate - bReleaseDate;
    }
    return sortBy.direction === 'descending' ? b[sortBy.key] - a[sortBy.key] : a[sortBy.key] - b[sortBy.key];
  });

  return sortMovieList;
};
