import { IMovieResults } from './searchResults';
import {
  GET_SEARCH_MOVIES,
  GET_SEARCH_MOVIES_SUCCESSFUL,
  GET_SEARCH_MOVIES_FAILED,
  CLEAR_SEARCH_MOVIES,
  SearchDispatchTypes,
} from './searchActions.types';

interface ISearchState {
  movies: {
    isLoading: boolean;
    results: IMovieResults;
    error: string;
  };
}

const initialState: ISearchState = {
  movies: {
    isLoading: false,
    results: {} as IMovieResults,
    error: '',
  },
};

const searchReducer = (state: ISearchState = initialState, action: SearchDispatchTypes): ISearchState => {
  switch (action.type) {
    case GET_SEARCH_MOVIES: {
      return {
        ...state,
        movies: {
          isLoading: true,
          results: initialState.movies.results,
          error: initialState.movies.error,
        },
      };
    }
    case GET_SEARCH_MOVIES_SUCCESSFUL: {
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          results: action.payload,
        },
      };
    }
    case GET_SEARCH_MOVIES_FAILED: {
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          error: action.payload,
        },
      };
    }
    case CLEAR_SEARCH_MOVIES: {
      return {
        ...state,
        movies: {
          ...state.movies,
          results: initialState.movies.results,
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

export default searchReducer;
