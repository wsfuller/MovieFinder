export interface IGenreItem {
  id: number;
  name: string;
}

interface IProductionCompanyItem {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

interface IProductionCountryItem {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguagesItem {
  iso_639_1: string;
  name: string;
}

/** IMovieItem is a partial type used for GET /movies where only a partial movie data is returned */
export interface IMovieItem {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

/** IMovie is the full movie object returned from GET /movies/{:movie_id} */
export interface IMovie extends IMovieItem {
  backdrop_path: string | null;
  belongs_to_collection: Record<string, unknown> | null;
  budget: number;
  genres: IGenreItem[];
  homepage: string | null;
  production_companies: IProductionCompanyItem[];
  production_countries: IProductionCountryItem[];
  status: string;
  tagline: string | null;
  revenue: number;
  runtime: number | null;
  imdb_id: string | null;
}

export interface INowPlayingMovies {
  results: IMovieItem[];
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  total_pages: number;
  total_results: number;
}

export interface IPopularMovies {
  results: IMovieItem[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface IUpcomingMovies {
  results: IMovieItem[];
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  total_pages: number;
  total_results: number;
}
