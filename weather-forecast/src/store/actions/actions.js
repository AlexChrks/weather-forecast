import { apiQuery } from '../../api/apiQuery'

export const PASS_DATA_TO_STORAGE = 'PASS_DATA_TO_STORAGE';
export const SET_CITY_ERROR = 'SET_CITY_ERROR';

export function passDataToStorage(data) {
  return {
    type: PASS_DATA_TO_STORAGE,
    payload: data
  }
}

export function setCityError() {
  return {
    type: SET_CITY_ERROR,
  }
}

export function sendApiQuery(city) {
  return (dispatch) => {
    apiQuery(city)
    .then((response) => {
      dispatch(passDataToStorage(response.data.daily));
    })
    .catch(() => {
      dispatch(setCityError());
    });
  };
}
