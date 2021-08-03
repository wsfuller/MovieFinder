/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse } from 'axios';
import { Action, AnyAction, Dispatch } from 'redux';

import { IMovieResults } from './searchResults';
import {
  GET_SEARCH_MOVIES,
  GET_SEARCH_MOVIES_SUCCESSFUL,
  GET_SEARCH_MOVIES_FAILED,
  CLEAR_SEARCH_MOVIES,
  SearchDispatchTypes,
} from './searchActions.types';

export const searchMovies =
  (searchTerm: string) =>
  async (dispatch: Dispatch<SearchDispatchTypes>): Promise<Action> => {
    try {
      dispatch({ type: GET_SEARCH_MOVIES });

      const { data }: AxiosResponse<IMovieResults> = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`
      );

      return dispatch({
        type: GET_SEARCH_MOVIES_SUCCESSFUL,
        payload: data,
      });
    } catch (err) {
      return dispatch({
        type: GET_SEARCH_MOVIES_FAILED,
        payload: err.message,
      });
    }
  };

export const clearSearchMovies =
  () =>
  (dispatch: Dispatch<SearchDispatchTypes>): AnyAction =>
    dispatch({ type: CLEAR_SEARCH_MOVIES });
