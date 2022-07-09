import { PUT_TO_CHECK, DELETE_FROM_CHECK } from '../constants/constants';

export const putToCheck = (data) => ({ type: PUT_TO_CHECK, payload: data });
export const deleteFromCheck = (data) => ({ type: DELETE_FROM_CHECK, payload: data });
