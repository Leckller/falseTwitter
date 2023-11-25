/* eslint-disable import/no-cycle */
import { AnyAction } from 'redux';
import { POSTS } from '../actions/ActionPosts';
import { PostsType } from '../../types';

const STATE = {
  globalPosts: [],
};

const PostsReducer = (state = STATE, action:AnyAction) => {
  switch (action.type) {
    case POSTS: {
      const arr = [...action.payload].sort((a:PostsType, b:PostsType) => {
        const yearA = a.data.split('T')[0].split('-').join();
        const yearB = b.data.split('T')[0].split('-').join();
        const horaA = a.data.split('T')[1].split('.')[0].split(':').join();
        const horaB = a.data.split('T')[1].split('.')[0].split(':').join();
        if ((yearA + horaA) < (yearB + horaB)) { return 1; }
        if ((yearA + horaA) > (yearB + horaB)) { return -1; }
        return -1;
      });
      return { ...state, globalPosts: arr };
    }
    default: {
      return { ...state };
    }
  }
};

export default PostsReducer;
