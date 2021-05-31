import { IMovieItem, MoviesDispatchTypes, GET_MOVIES, GET_MOVIES_SUCCESSFUL, GET_MOVIES_FAILED } from './movies.types';

interface IMoviesState {
  isLoading: boolean;
  data: IMovieItem[];
  error: string;
}

const initialState: IMoviesState = {
  isLoading: false,
  data: [],
  error: '',
};

const moviesReducer = (state: IMoviesState = initialState, action: MoviesDispatchTypes): IMoviesState => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        isLoading: true,
        data: initialState.data,
        error: '',
      };
    }
    case GET_MOVIES_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    }
    case GET_MOVIES_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
