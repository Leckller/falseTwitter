import { PostsType } from '../types';

const organizador = (ps: PostsType[]) => {
  return ps.sort((a, b) => {
    if (JSON.parse(a.data)[1].split(':') > JSON.parse(b.data)[1].split(':')) return -1;
    if (JSON.parse(a.data)[1].split(':') < JSON.parse(b.data)[1].split(':')) return 1;
    return 0;
  });
};

export default organizador;
