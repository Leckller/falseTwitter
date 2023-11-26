/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsChatSquareDots, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState, PostsType } from '../types';
import { editPost } from '../redux/actions/ActionPosts';

function PostM({ actP, likeEvent, reload, setReload }: { actP: PostsType, likeEvent: (
  id: string, likes: string[], userId: string
) => void, setReload: (p:boolean) => void, reload: boolean }) {
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loc = useLocation().pathname.split('/')[1];
  return (
    <article className="border-t border-gray-900 border-b">

      <div className="w-screen relative flex flex-row justify-between">

        <div className="flex flex-row w-1/2 items-center">

          <button className="w-10" onClick={ () => navigate(`/user/${actP.userName}`) }>
            <img className="rounded-full" src={ actP.userImg } alt="user" />
          </button>
          <Link to={ `/user/${actP.userName}` }>
            <h3>{actP.userName}</h3>
          </Link>
        </div>

        <div className="flex flex-row w-1/2 justify-end items-center">

          <h6>{JSON.parse(actP.data)[1]}</h6>
          {actP.edit ? (
            <div className="">
              <button className="" onClick={ () => dispatch(editPost(actP)) }>
                X
              </button>
              <button>Apagar Post</button>
              <button>Compartilhar Post</button>
            </div>
          ) : (
            <button className="w-8" onClick={ () => dispatch(editPost(actP)) }>
              :
            </button>
          )}

        </div>

      </div>

      <div className="flex flex-col">

        <p className="break-all pl-5 pr-5">{actP.text}</p>

        <div className="flex flex-row w-full justify-around pt-4 pb-2">

          {loc === 'post' ? (
            <button>
              <BsChatSquareDots />
            </button>
          ) : (
            <Link to={ `/post/${actP.postId}` }>
              <BsChatSquareDots />
            </Link>
          )}
          <label htmlFor="like">
            {/* {actP.likes.length} */}
            <button
              onClick={ () => {
                likeEvent(actP.postId, actP.likes, user.uid);
                setTimeout(() => {
                  setReload(!reload);
                }, (500));
              } }
              id="like"
            >
              {actP.likes.includes(user.uid) ? (
                <BsSuitHeartFill />
              ) : (
                <BsSuitHeart />
              )}
            </button>
          </label>

        </div>

      </div>

    </article>
  );
}

export default PostM;
