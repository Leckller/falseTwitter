/* eslint-disable import/no-cycle */
import { AnyAction } from 'redux';
import { EDIT_POST, POSTS } from '../actions/ActionPosts';
import { PostsType } from '../../types';
import organizador from '../../utils/OrganizadorDePosts';

const STATE = {
  globalPosts: [],
};

const PostsReducer = (state = STATE, action:AnyAction) => {
  switch (action.type) {
    case POSTS: {
      return { ...state, globalPosts: organizador(action.payload) };
    }
    case EDIT_POST: {
      const post = action.payload;
      return { ...state,
        globalPosts: organizador([...state.globalPosts
          .filter((p:PostsType) => p.postId !== post.postId),
        { ...post, edit: !post.edit }]) };
    }
    default: {
      return { ...state };
    }
  }
};

export default PostsReducer;
