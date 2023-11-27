/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { GlobalState, PostsType } from '../types';
import PostM from '../components/PostM';
import { db } from '../firebase';
import { posts } from '../redux/actions/ActionPosts';

function Post() {
  const loc = useLocation().pathname.split('/')[2];
  const [reload, setReload] = useState(false);
  const postsAr = useSelector((state:GlobalState) => state.PostsReducer.globalPosts);
  const post = postsAr.find((p) => p.postId === loc);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    if (reload) effect();
  }, [reload]);
  return (
    <div>
      <section>
        <div className="w-screen p-5">
          <button onClick={ () => navigate(-1) }>
            <IoArrowUndoOutline />
          </button>
        </div>
        <PostM
          actP={ post as PostsType }
          reload={ reload }
          setReload={ setReload }
        />
      </section>
      <section>
        {post?.coments && post.coments.map((info) => (
          <PostM
            key={ info.postId }
            actP={ info }
            reload={ reload }
            setReload={ setReload }
          />
        ))}
      </section>
    </div>
  );
}

export default Post;
