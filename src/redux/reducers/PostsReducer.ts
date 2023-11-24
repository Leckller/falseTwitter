/* eslint-disable import/no-cycle */
import { AnyAction } from 'redux';
import { POSTS } from '../actions/ActionPosts';

const STATE = {
  globalPosts: [],
};

const PostsReducer = (state = STATE, action:AnyAction) => {
  switch (action.type) {
    case POSTS: {
      return { ...state, globalPosts: [...action.payload] };
    }
    default: {
      return { ...state };
    }
  }
};

export default PostsReducer;
