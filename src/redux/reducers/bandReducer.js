import BandActions from '../actions/bandActions';

export const initialState = {
  data: [],
  error: null
};

export const bandReducer = (state = initialState, action) => {
  switch (action.type) {
    case BandActions.SUCCESS:
      return { data: action.data, error: null };
    case BandActions.FAILURE:
      return { data: [], error: action.error };
    default:
      return state;
  }
};

export default bandReducer;
