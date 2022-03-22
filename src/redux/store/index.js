import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import bandsReducer from '../reducers/bandReducer';

const store = createStore(bandsReducer, applyMiddleware(thunkMiddleware));

export default store;
