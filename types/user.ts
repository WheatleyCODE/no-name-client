export enum UserRoles {
  USER = 'USER',
  VIP = 'VIP',
  ADMIN = 'ADMIN',
}

export interface IUser {
  email: string;
  _id: string;
  role: UserRoles;
  isActivated: boolean;
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
  isAuth: boolean;
  user: IUser;
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SET_USER = 'SET_USER',
  SET_AUTH = 'SET_AUTH',
}

interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUserSuccesAction {
  type: UserActionTypes.FETCH_USERS_SUCCES;
  payload: any[];
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: IUser;
}

interface SetAuthAction {
  type: UserActionTypes.SET_AUTH;
  payload: boolean;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccesAction
  | FetchUserErrorAction
  | SetUserAction
  | SetAuthAction;
