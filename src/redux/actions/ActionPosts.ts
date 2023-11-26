// eslint-disable-next-line import/no-cycle
import { PostsType } from '../../types';

export const POSTS = 'POSTS';
export const posts = (ps:PostsType[]) => ({
  type: POSTS,
  payload: ps,
});

export const EDIT_POST = 'EDIT_POST';
export const editPost = (p: PostsType) => ({
  type: EDIT_POST,
  payload: p,
});
