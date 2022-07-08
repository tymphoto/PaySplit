import { GET_MENU } from '../constants/constants';

const menuReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MENU:
      return payload;

    default:
      return state;
  }
};

export default menuReducer;
