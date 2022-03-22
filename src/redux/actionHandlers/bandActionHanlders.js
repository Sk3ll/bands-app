import BandActions from '../actions/bandActions';

export const bandRequest = () => ({ type: BandActions.REQUEST });

export const bandSuccess = (data) => ({ type: BandActions.SUCCESS, data });

export const bandFailure = (error) => ({ type: BandActions.FAILURE, error });
