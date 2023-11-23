// eslint-disable-next-line import/no-cycle
import { PostsType } from '../../types';

export const POSTS = 'POSTS';
export const posts = (ps:PostsType[]) => ({
  type: POSTS,
  payload: ps,
});
