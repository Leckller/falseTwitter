export type PostsType = {
  text: string,
  imgUrl?: string,
  altImg?: string,
  userName: string,
  userId: string,
  postId: string,
  data: string,
  userImg: string,
  edit: boolean,
  likes: string[],
  coments: PostsType[],
};

export type GlobalState = {
  UserReducer: {
    user: any,
  }
  PostsReducer: {
    globalPosts: PostsType[],
  }
};

export type UserType = {
  uid: string,
  email: string,
  displayName: string,
};
