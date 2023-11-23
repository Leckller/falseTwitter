import store from './redux';

export type PostsType = {
  text: string,
  imgUrl?: string,
  altImg?: string,
  userName: string,
  userId: string,
};

export type GlobalState = ReturnType<typeof store.getState>;
