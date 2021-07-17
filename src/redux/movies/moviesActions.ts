import axios, { AxiosResponse } from 'axios';
import { Action, Dispatch } from 'redux';

import { INowPlayingMovies, IPopularMovies, IUpcomingMovies, IMovie } from './movies';

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

export const getPopularMovies =
  () =>
  async (dispatch: Dispatch<MoviesDispatchTypes>): Promise<Action> => {
    try {
      dispatch({ type: GET_POPULAR_MOVIES });

      const { data }: AxiosResponse<IPopularMovies> = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      );

      return dispatch({
        type: GET_POPULAR_MOVIES_SUCCESSFUL,
        payload: {
          results: data.results,
          page: data.page,
          total_pages: data.total_pages,
          total_results: data.total_results,
        },
      });
    } catch (err) {
      return dispatch({
        type: GET_POPULAR_MOVIES_FAILED,
        payload: err.message,
      });
    }
  };

export const getUpcomingMovies =
  () =>
  async (dispatch: Dispatch<MoviesDispatchTypes>): Promise<Action> => {
    try {
      dispatch({ type: GET_UPCOMING_MOVIES });

      const { data }: AxiosResponse<IUpcomingMovies> = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
      );

      return dispatch({
        type: GET_UPCOMING_MOVIES_SUCCESSFUL,
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
        type: GET_UPCOMING_MOVIES_FAILED,
        payload: err.message,
      });
    }
  };

export const getMovie =
  (movieId: number) =>
  async (dispatch: Dispatch<MoviesDispatchTypes>): Promise<Action> => {
    try {
      dispatch({ type: GET_MOVIE });

      const { data }: AxiosResponse<IMovie> = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
      );

      return dispatch({
        type: GET_MOVIE_SUCCESSFUL,
        payload: data,
      });
    } catch (err) {
      return dispatch({
        type: GET_MOVIE_FAILED,
        payload: err.message,
      });
    }
  };

export const clearSelectedMovie =
  () =>
  (dispatch: Dispatch<MoviesDispatchTypes>): Action => {
    return dispatch({ type: CLEAR_SELECTED_MOVIE });
  };
