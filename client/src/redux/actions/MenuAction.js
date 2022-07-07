import axios from 'axios'
import { GET_MENU } from '../constants/constants';

export const getMenu = (data) => ({ type: GET_MENU, payload: data });

export const getMenuReq = () => async (dispatch) => {
  const response = await axios.get('');
  dispatch(getMenu(response.data));
};
