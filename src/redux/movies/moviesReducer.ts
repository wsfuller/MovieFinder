import { IMovie, INowPlayingMovies, IPopularMovies, IUpcomingMovies } from './movies';
import {
  MoviesDispatchTypes,
  GET_NOW_PLAYING_MOVIES,
  GET_NOW_PLAYING_MOVIES_SUCCESSFUL,
  GET_NOW_PLAYING_MOVIES_FAILED,
  GET_POPULAR_MOVIES,
  GET_POPULAR_MOVIES_SUCCESSFUL,
  GET_POPULAR_MOVIES_FAILED,
  GET_UPCOMING_MOVIES,
  GET_UPCOMING_MOVIES_SUCCESSFUL,
  GET_UPCOMING_MOVIES_FAILED,
  GET_MOVIE,
  GET_MOVIE_SUCCESSFUL,
  GET_MOVIE_FAILED,
  CLEAR_SELECTED_MOVIE,
} from './moviesActions.types';

interface IMoviesState {
  selected: {
    isLoading: boolean;
    data: IMovie;
    error: string;
  };
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
  upcoming: {
    isLoading: boolean;
    data: IUpcomingMovies;
    error: string;
  };
}

const initialState: IMoviesState = {
  selected: {
    isLoading: false,
    data: {} as IMovie,
    error: '',
  },
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
  upcoming: {
    isLoading: false,
    data: {} as IUpcomingMovies,
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
    case GET_UPCOMING_MOVIES: {
      return {
        ...state,
        upcoming: {
          isLoading: true,
          data: initialState.upcoming.data,
          error: initialState.upcoming.error,
        },
      };
    }
    case GET_UPCOMING_MOVIES_SUCCESSFUL: {
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          isLoading: false,
          data: {
            ...action.payload,
          },
        },
      };
    }
    case GET_UPCOMING_MOVIES_FAILED: {
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          isLoading: false,
          error: action.payload,
        },
      };
    }
    case GET_MOVIE: {
      return {
        ...state,
        selected: {
          isLoading: true,
          data: initialState.selected.data,
          error: initialState.selected.error,
        },
      };
    }
    case GET_MOVIE_SUCCESSFUL: {
      return {
        ...state,
        selected: {
          ...state.selected,
          isLoading: false,
          data: action.payload,
        },
      };
    }
    case GET_MOVIE_FAILED: {
      return {
        ...state,
        selected: {
          ...state.selected,
          isLoading: false,
          error: action.payload,
        },
      };
    }
    case CLEAR_SELECTED_MOVIE: {
      return {
        ...state,
        selected: {
          isLoading: false,
          data: initialState.selected.data,
          error: initialState.selected.error,
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
