import { useReducer } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'use-reducer-logger';
import BandActions from '../actions/bandActions';

const initialState = {
  data: [],
  error: null
};

function init(initialData) {
  return initialData || [];
}

function useBandReducer() {
  const [bandState, dispatch] = useReducer(
    logger((state, action) => {
      switch (action.type) {
        case BandActions.REQUEST:
          return { data: [], error: null };
        case BandActions.SUCCESS:
          return { data: action.data, error: null };
        case BandActions.FAILURE:
          return { data: [], error: action.error };
        default:
          throw new Error();
      }
    }),
    initialState,
    init
  );

  const dispatchThunk = (action) => {
    if (typeof action === 'function') {
      action(dispatchThunk);
    } else {
      dispatch(action);
    }
  };

  return [bandState, dispatchThunk];
}

export default useBandReducer;
