import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { GlobalState, PostsType } from '../types';
import { PostDivBodyM, PostDivComentsM } from '../Styles/PostStyles';
import PostM from '../components/PostM';
import likeEvent from '../utils/LikeEventFunction';

function Post() {
  const loc = useLocation().pathname.split('/')[2];
  const [reload, setReload] = useState(false);
  const posts = useSelector((state:GlobalState) => state.PostsReducer.globalPosts);
  const post = posts.find((p) => p.postId === loc);
  return (
    <PostDivBodyM>
      <PostM
        actP={ post as PostsType }
        likeEvent={ likeEvent }
        reload={ reload }
        setReload={ setReload }
      />
      <PostDivComentsM>
        <article>
          <img src="" alt="" />
        </article>
      </PostDivComentsM>
    </PostDivBodyM>
  );
}

export default Post;
