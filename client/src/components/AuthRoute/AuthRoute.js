/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserForm from '../UserForm/UserForm';

function AuthRoute({ children }) {
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  // console.log(user);

  return (
    user ? children : <UserForm />
  );
}

export default AuthRoute;
