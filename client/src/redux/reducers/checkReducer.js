/* eslint-disable consistent-return */
import {
  PUT_TO_CHECK, DELETE_FROM_CHECK, INCREMENT, DECREMENT,
} from '../constants/constants';

const initialState = [];

const CheckReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUT_TO_CHECK:
      return [...state, payload];
    case DELETE_FROM_CHECK:
      return state.filter((el) => el.id !== payload.id);
    default:
      return state;
  }
};

export default CheckReducer;
