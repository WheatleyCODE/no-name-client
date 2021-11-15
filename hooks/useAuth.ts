import React, { useEffect } from 'react';
import { useActions, useTypedSelector } from '@hooks';

export const useAuth = () => {
  const { user, isAuth } = useTypedSelector((state) => state.user);
  const { checkAuthAC } = useActions();

  useEffect(() => {
    checkAuthAC();
  }, []);

  return {
    user,
    isAuth,
  };
};
