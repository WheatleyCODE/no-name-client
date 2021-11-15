import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useActions, useTypedSelector } from '@hooks';

export const useAuth = () => {
  const { user, isAuth } = useTypedSelector((state) => state.user);
  const { checkAuthAC } = useActions();
  const router = useRouter();

  useEffect(() => {
    checkAuthAC();
  }, [router]);

  return {
    user,
    isAuth,
  };
};
