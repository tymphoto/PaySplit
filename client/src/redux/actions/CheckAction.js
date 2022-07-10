import { PUT_TO_CHECK, DELETE_FROM_CHECK, CREATE_NEW_CHECK } from '../constants/constants';

/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */

export const putToCheck = (data) => ({ type: PUT_TO_CHECK, payload: data });
export const deleteFromCheck = (data) => ({ type: DELETE_FROM_CHECK, payload: data });

export const getCheckThunk = (body) => async (dispatch) => {
  console.log(body);
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
      const result = await response.json();
      // dispatch(getNewCheck(result));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
};
