import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';
import { PostsType } from '../types';

export class PostDB {
  private queryDB = query(collection(db, 'Posts'));

  public async allPosts(): Promise<PostsType[]> {
    const querySnapshot = await getDocs(this.queryDB);
    const allPosts:PostsType[] = [];
    querySnapshot.forEach((resp) => {
      allPosts.push(resp.data() as PostsType);
    });
    return allPosts;
  }
}
