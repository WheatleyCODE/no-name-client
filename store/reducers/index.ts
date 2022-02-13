import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { userReducer } from './userReducer';
import { carColorReducer } from './CarColorReducer';

const rootReducer = combineReducers({
  user: userReducer,
  carColor: carColorReducer,
});

export const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export type NextThunckDispatch = ThunkDispatch<RootState, void, AnyAction>;
