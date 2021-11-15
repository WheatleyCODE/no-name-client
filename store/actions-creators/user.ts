import { PathRoutes } from './../../consts/index';
import axios from 'axios';
import { Dispatch } from 'react';
import { AuthResponse, IUser, UserAction, UserActionTypes } from '@t';
import { AuthService } from '@services/AuthService';
import { API_URL_IP } from '@http';
import { UserService } from '@services/UserService';

export const fetchUsersAC = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCES,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};

export const setUserAC = (user: IUser): UserAction => {
  return {
    type: UserActionTypes.SET_USER,
    payload: user,
  };
};

export const setAuthAC = (boolean: boolean): UserAction => {
  return {
    type: UserActionTypes.SET_AUTH,
    payload: boolean,
  };
};

export const setAuthErrorAC = (err: string | null): UserAction => {
  return {
    type: UserActionTypes.SET_AUTH_ERROR,
    payload: err,
  };
};

export const loginAC = (email: string, password: string, redirect: () => void) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch(setAuthErrorAC(null));
      const res = await AuthService.login(email, password);
      localStorage.setItem('token', res.data.accessToken);
      dispatch(setAuthAC(true));
      dispatch(setUserAC(res.data.user));
      redirect();
    } catch (e) {
      dispatch(setAuthErrorAC(e?.response?.data?.message));
    }
  };
};

export const registrationAC = (email: string, password: string, redirect: () => void) => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch(setAuthErrorAC(null));
      const res = await AuthService.registration(email, password);
      const resLog = await AuthService.login(email, password);
      localStorage.setItem('token', res.data.accessToken);
      dispatch(setAuthAC(true));
      dispatch(setUserAC(res.data.user));
      redirect();
    } catch (e) {
      dispatch(setAuthErrorAC(e?.response?.data?.message));
    }
  };
};

export const logoutAC = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await AuthService.logout();
      console.log(res);
      localStorage.removeItem('token');
      dispatch(setAuthAC(false));
      dispatch(setUserAC({} as IUser));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export const checkAuthAC = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await axios.get<AuthResponse>(`${API_URL_IP}/api/auth/refresh`, {
        withCredentials: true,
      });
      console.log(res);
      localStorage.setItem('token', res.data.accessToken);
      dispatch(setAuthAC(true));
      dispatch(setUserAC(res.data.user));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};

export const fetchUsersACNormal = () => {
  return async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      const res = await UserService.fetchUsers();
      console.log(res);
      // dispatch(setTestAC(res.data));
    } catch (e) {
      console.log(e?.response?.data?.message);
    }
  };
};
