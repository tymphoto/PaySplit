/* eslint-disable no-lone-blocks */
import {
  PUT_TO_CHECK, DELETE_FROM_CHECK, PLUS_ELEMENT_TO_CHECK, MINUS_ELEMENT_TO_CHECK,
} from '../constants/constants';

export const putToCheck = (data, count) => ({ type: PUT_TO_CHECK, payload: { data, count } });
export const deleteFromCheck = (data) => ({ type: DELETE_FROM_CHECK, payload: data });
export const plusElementCount = (data) => (
  { type: PLUS_ELEMENT_TO_CHECK, payload: data }
);
export const minusElementCount = (data) => (
  { type: MINUS_ELEMENT_TO_CHECK, payload: data }
);

export const getCreateThunk = (body) => async (dispatch) => {
  const response = await fetch(
    'http://localhost:3003/checkCreate',
    {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ body }),
    },
  );
  {
    try {
      if (response.ok) {
        const result = await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  }
};
