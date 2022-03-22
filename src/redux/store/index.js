import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import bandsReducer from '../reducers/bandReducer';

const store = createStore(bandsReducer, applyMiddleware(thunkMiddleware, logger));

export default store;
