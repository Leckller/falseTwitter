import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './reducers/UserReducer';
import PostsReducer from './reducers/PostsReducer';

const reducer = combineReducers({
  UserReducer,
  PostsReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
