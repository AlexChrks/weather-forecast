import {PASS_DATA_TO_STORAGE, SET_CITY_ERROR} from '../actions/actions';
import { getDayofWeek } from '../../utils/utils'

const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case PASS_DATA_TO_STORAGE:

      const transformedArr = action.payload.map((current) => {
        return {
          day: getDayofWeek(current.dt),
          temperature: current.temp.max.toFixed(0)
        }
      });

      return {
        weekForecast: transformedArr,
        cityError: false
      };   

    case SET_CITY_ERROR:
      return {
        cityError: true
      };     

    default:
      return state;
  }
}

export const selectWeekForecast = state => state.weekForecast;
