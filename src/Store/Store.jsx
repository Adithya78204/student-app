import { createStore, combineReducers } from 'redux';
import studentReducer from '../Reducers/StudentReducers';
import authReducer from '../Reducers/AuthReducers';

const rootReducer = combineReducers({
  students: studentReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
