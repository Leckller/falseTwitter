import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';
import { posts } from '../redux/actions/ActionPosts';
import { GlobalState, PostsType } from '../types';

import PostM from '../components/PostM';
import TweetM from '../components/TweetM';

function Home() {
  const dispatch = useDispatch();
  const [close, setClose] = useState(true);
  const [reload, setReload] = useState(false);
  const { globalPosts } = useSelector((state:GlobalState) => state.PostsReducer);
  useEffect(() => {
    const effect = async () => {
      const q = query(collection(db, 'Posts'));
      const querySnapshot = await getDocs(q);
      const allPosts:PostsType[] = [];
      querySnapshot.forEach((resp) => {
        allPosts.push(resp.data() as PostsType);
      });
      dispatch(posts(allPosts));
    };
    if (close) effect();
  }, [close, reload]);

  return (
    <main className="h-full relative pb-20">
      <section>
        {globalPosts && globalPosts.map((actP) => (
          <PostM
            key={ actP.postId }
            actP={ actP }
            reload={ reload }
            setReload={ setReload }
          />
        ))}
      </section>
      {close === true ? (
        <button
          className="fixed w-16 h-16 flex items-center
                  justify-center
                  text-lg
                  rounded-full
                bg-blue-500 bottom-24 right-5"
          onClick={ () => setClose(!close) }
        >
          T
        </button>

      ) : (
        <TweetM
          close={ close }
          setClose={ setClose }
        />
      )}
    </main>
  );
}

export default Home;
