import { GET_BILL } from '../constants/constants';

const billReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BILL:
      return payload;
    default:
      return state;
  }
};

export default billReducer;
