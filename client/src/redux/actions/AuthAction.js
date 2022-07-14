import {
  CREATE_USER, CHECK_USER, LOGOUT_USER,
} from '../constants/constants';

export const createUser = (data) => ({ type: CREATE_USER, payload: data });
export const checkUser = (data) => ({ type: CHECK_USER, payload: data });
export const userLogout = () => ({ type: LOGOUT_USER, payload: null });

export const userAuthThunk = (loginToggle, body) => async (dispatch) => {
  const response = await fetch(
    loginToggle ? 'http://localhost:3003/login' : 'http://localhost:3003/register',
    {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },

  );
  // console.log(response);
  if (response.ok) {
    // console.log(response);
    const result = await response.json();
    dispatch(createUser(result));
  }
};

export const userCheckAuthThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3003/auth', { credentials: 'include' });
  const result = await response.json();
  dispatch(checkUser(result));
};

export const userLogoutThunk = () => async (dispatch) => {
  await fetch('http://localhost:3003/logout', { credentials: 'include' });
  dispatch(userLogout());
};
