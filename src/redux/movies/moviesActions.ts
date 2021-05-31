import axios from 'axios';
import { Action, Dispatch } from 'redux';

import { MoviesDispatchTypes, GET_MOVIES, GET_MOVIES_SUCCESSFUL, GET_MOVIES_FAILED } from './movies.types';

const getMovies =
  () =>
  async (dispatch: Dispatch<MoviesDispatchTypes>): Promise<Action> => {
    try {
      dispatch({ type: GET_MOVIES });

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      );

      return dispatch({
        type: GET_MOVIES_SUCCESSFUL,
        payload: {
          data: response.data,
        },
      });
    } catch (err) {
      return dispatch({
        type: GET_MOVIES_FAILED,
        payload: err.message,
      });
    }
  };

export default getMovies;
