/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse } from 'axios';
import { Action, Dispatch } from 'redux';

import { INowPlayingMovies } from './movies';

import {
  MoviesDispatchTypes,
  GET_NOW_PLAYING_MOVIES,
  GET_NOW_PLAYING_MOVIES_SUCCESSFUL,
  GET_NOW_PLAYING_MOVIES_FAILED,
} from './moviesActions.types';

export const getNowPlayingMovies =
  () =>
  async (dispatch: Dispatch<MoviesDispatchTypes>): Promise<Action> => {
    try {
      dispatch({ type: GET_NOW_PLAYING_MOVIES });

      const { data }: AxiosResponse<INowPlayingMovies> = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      );

      return dispatch({
        type: GET_NOW_PLAYING_MOVIES_SUCCESSFUL,
        payload: {
          results: data.results,
          dates: {
            maximum: data.dates.maximum,
            minimum: data.dates.minimum,
          },
          page: data.page,
          total_pages: data.total_pages,
          total_results: data.total_results,
        },
      });
    } catch (err) {
      return dispatch({
        type: GET_NOW_PLAYING_MOVIES_FAILED,
        payload: err.message,
      });
    }
  };
