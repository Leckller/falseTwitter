import { AnyAction } from 'redux';
import { POSTS } from '../actions/ActionPosts';

const STATE = {
  posts: [],
};

const PostsReducer = (state = STATE, action:AnyAction) => {
  switch (action.type) {
    case POSTS: {
      return { ...state, posts: [...action.payload] };
    }
    default: {
      return { ...state };
    }
  }
};

export default PostsReducer;
