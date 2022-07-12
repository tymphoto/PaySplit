import { GET_MENU, GET_CATEGORY } from '../constants/constants';

const menuReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORY:
      return { category: payload };
    case GET_MENU:
      return { products: payload };
    default:
      return state;
  }
};

export default menuReducer;
