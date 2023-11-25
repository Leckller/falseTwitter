export type PostsType = {
  text: string,
  imgUrl?: string,
  altImg?: string,
  userName: string,
  userId: string,
  postId: string,
  data: string,
  userImg: string,
};

export type GlobalState = {
  UserReducer: {
    user: any,
  }
  PostsReducer: {
    globalPosts: PostsType[],
  }
};
