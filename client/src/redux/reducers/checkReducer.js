/* eslint-disable consistent-return */
import {
  PUT_TO_CHECK, DELETE_FROM_CHECK, PLUS_ELEMENT_TO_CHECK, MINUS_ELEMENT_TO_CHECK,
} from '../constants/constants';

const initialState = [];

const CheckReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUT_TO_CHECK:
      return [...state, payload];
    case DELETE_FROM_CHECK:
      return state.filter((el) => el.data.id !== payload.data.id);
    case PLUS_ELEMENT_TO_CHECK:
      return state.map((el) => {
        if (el.data.id === payload.data.id) {
          const sum = el.count + 1;
          return { ...el, count: sum };
        }
        return el;
      });
    case MINUS_ELEMENT_TO_CHECK:
      return state.map((el) => {
        if (el.data.id === payload.data.id) {
          const sum = el.count - 1;
          return { ...el, count: sum };
        }
        return el;
      });
    default:
      return state;
  }
};

export default CheckReducer;
