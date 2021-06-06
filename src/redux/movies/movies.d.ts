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

interface IGenreItem {
  id: number;
  name: string;
}

export interface ILatestMovieItem {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;
  genres: IGenreItem[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
