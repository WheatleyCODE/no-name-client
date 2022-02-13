import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '@actions/user';
import * as carColorActionCreators from '@actions/carColor';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...userActionCreators,
      ...carColorActionCreators,
    },
    dispatch
  );
};
