import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import UserForm from '../UserForm/UserForm';
import { userCheckAuthThunk } from '../../redux/actions/AuthAction';

function AuthRoute({ children }) {
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(userCheckAuthThunk());
    } else {
      navigate('/');
    }
  }, []);

  return (
    user ? children : <UserForm />
  );
}

export default AuthRoute;
