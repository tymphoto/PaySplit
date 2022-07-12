/* eslint-disable no-lone-blocks */
import { GET_MENU, GET_NEW_PRODUCT } from '../constants/constants';

export const getMenu = (data) => ({ type: GET_MENU, payload: data });
export const getNewProduct = (data) => ({ type: GET_NEW_PRODUCT, payload: data });

export const getMenuThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3003/');
  const result = await response.json();
  dispatch(getMenu(result));
};

export const createProdThunk = (body) => async (dispatch) => {
  console.log(body, '===========');
  // const response = await fetch(
  //   'http://localhost:3003/prodCreate',
  //   {
  //     method: 'post',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   },
  // );
  // {
  //   try {
  //     if (response.ok) {
  //       const result = await response.json();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
};
