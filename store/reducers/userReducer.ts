import { UserAction, UserActionTypes, UserState } from '@t';
import { IUser } from '@t';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  isAuth: false,
  user: {} as IUser,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { ...state, loading: true, error: null, users: [] };

    case UserActionTypes.FETCH_USERS_SUCCES:
      return { ...state, loading: false, error: null, users: action.payload };

    case UserActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, users: [] };

    case UserActionTypes.SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }

    case UserActionTypes.SET_USER: {
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
};
