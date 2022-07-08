import { GET_MENU } from '../constants/constants';

export const getMenu = (data) => ({ type: GET_MENU, payload: data });

export const getMenuThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3003/');
  const result = await response.json();
  dispatch(getMenu(result));
};
