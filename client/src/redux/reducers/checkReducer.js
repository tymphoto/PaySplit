import { PUT_TO_CHECK, DELETE_FROM_CHECK, CREATE_NEW_CHECK } from '../constants/constants';

const initialState = [];

const CheckReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PUT_TO_CHECK:
      return [...state, payload];
    case DELETE_FROM_CHECK:
      return state.filter((el) => el.id !== payload.id);
    case CREATE_NEW_CHECK:
      return [{ newCheck: payload }];
    default:
      return state;
  }
};

export default CheckReducer;
