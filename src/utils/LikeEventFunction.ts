import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const likeEvent = async (id: string, likes: string[], userId: string) => {
  const postRef = doc(db, 'Posts', id);
  if (likes.some((u) => u === userId)) {
    await updateDoc(postRef, {
      likes: likes.filter((u) => u !== userId),
    });
  }
  if (!likes.some((u) => u === userId)) {
    await updateDoc(postRef, {
      likes: [...likes, userId],
    });
  }
};

export default likeEvent;
