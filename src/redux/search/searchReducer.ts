import { IMovieResults } from './searchResults';
import { GET_SEARCH_MOVIES, SearchDispatchTypes } from './searchActions.types';

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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default searchReducer;
