/* eslint-disable no-lone-blocks */
import { GET_MENU, GET_NEW_PRODUCT, GET_CATEGORY } from '../constants/constants';

export const getMenu = (data) => ({ type: GET_MENU, payload: data });
export const getCategory = (data) => ({ type: GET_CATEGORY, payload: data });

export const getNewProduct = (data) => ({ type: GET_NEW_PRODUCT, payload: data });

export const getMenuThunk = (body) => async (dispatch) => {
  // console.log(body);
  const response = await fetch(`http://localhost:3003/${body}`);
  const result = await response.json();
  dispatch(getMenu(result));
};

export const getCategoryThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3003');
  const result = await response.json();
  dispatch(getCategory(result));
};
