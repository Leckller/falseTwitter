export type PostsType = {
  text: string,
  imgUrl?: string,
  altImg?: string,
  userName: string,
  userId: string,
};

export type GlobalState = {
  UserReducer: {
    user: any,
  }
  PostsReducer: {
    globalPosts: PostsType[],
  }
};
