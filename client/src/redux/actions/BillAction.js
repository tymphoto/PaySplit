import { GET_BILL } from '../constants/constants';

export const getBill = (data) => ({ type: GET_BILL, payload: data });

export const getBillThunk = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3003/order/${id}`);
  const result = await response.json();
  console.log(result);
  dispatch(getBill(result));
};
