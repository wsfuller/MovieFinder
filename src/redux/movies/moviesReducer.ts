import { INowPlayingMovies, IPopularMovies } from './movies';
import {
  MoviesDispatchTypes,
  GET_NOW_PLAYING_MOVIES,
  GET_NOW_PLAYING_MOVIES_SUCCESSFUL,
  GET_NOW_PLAYING_MOVIES_FAILED,
  GET_POPULAR_MOVIES,
  GET_POPULAR_MOVIES_SUCCESSFUL,
  GET_POPULAR_MOVIES_FAILED,
} from './moviesActions.types';

interface IMoviesState {
  nowPlaying: {
    isLoading: boolean;
    data: INowPlayingMovies;
    error: string;
  };
  popular: {
    isLoading: boolean;
    data: IPopularMovies;
    error: string;
  };
}

const initialState: IMoviesState = {
  nowPlaying: {
    isLoading: false,
    data: {} as INowPlayingMovies,
    error: '',
  },
  popular: {
    isLoading: false,
    data: {} as IPopularMovies,
    error: '',
  },
};

const moviesReducer = (state: IMoviesState = initialState, action: MoviesDispatchTypes): IMoviesState => {
  switch (action.type) {
    case GET_NOW_PLAYING_MOVIES: {
      return {
        ...state,
        nowPlaying: {
          isLoading: true,
          data: initialState.nowPlaying.data,
          error: initialState.nowPlaying.error,
        },
      };
    }
    case GET_NOW_PLAYING_MOVIES_SUCCESSFUL: {
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          isLoading: false,
          data: {
            ...action.payload,
          },
        },
      };
    }
    case GET_NOW_PLAYING_MOVIES_FAILED: {
      return {
        ...state,
        nowPlaying: {
          ...state.nowPlaying,
          isLoading: false,
          error: action.payload,
        },
      };
    }
    case GET_POPULAR_MOVIES: {
      return {
        ...state,
        popular: {
          isLoading: true,
          data: initialState.popular.data,
          error: initialState.popular.error,
        },
      };
    }
    case GET_POPULAR_MOVIES_SUCCESSFUL: {
      return {
        ...state,
        popular: {
          ...state.popular,
          isLoading: false,
          data: {
            ...action.payload,
          },
        },
      };
    }
    case GET_POPULAR_MOVIES_FAILED: {
      return {
        ...state,
        popular: {
          ...state.popular,
          isLoading: false,
          error: action.payload,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default moviesReducer;
