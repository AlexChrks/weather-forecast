import {PASS_DATA_TO_STORAGE, SET_CITY_ERROR} from '../actions/actions';


const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case PASS_DATA_TO_STORAGE:

      const transformedArr = action.payload.map((current) => {
        return {
          day: getDayofWeek(current.dt),
          temperature: (current.temp.day - 273).toFixed(0)
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

const getDayofWeek = (date) => {
  const transformedDate = new Date(date * 1000);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
  return days[transformedDate.getDay()];
}

export const selectWeekForecast = state => state.weekForecast;
