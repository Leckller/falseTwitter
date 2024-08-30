/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
import { Link, useNavigate } from 'react-router-dom';
import { BsChatSquareDots, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { SlOptionsVertical } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { PostsType } from '../types';
import { editPost } from '../redux/actions/ActionPosts';
import useUser from '../hooks/useUser';
import TweetComentM from './TweetComentM';
import likeEvent from '../utils/LikeEventFunction';

function PostM({ actP, reload, setReload }: { actP: PostsType,
  setReload: (p:boolean) => void, reload: boolean }) {
  const user = useUser();
  const [tweet, setTweet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {}, [tweet]);
  return (
    <article
      className="border-t border-gray-900 border-b"
    >
      <div className="w-screen relative flex flex-row justify-between">

        <div className="flex flex-row w-1/2 items-center">

          <button
            className="w-10 ml-5"
            onClick={ () => navigate(`/user/${actP.userId}`) }
          >
            <img className="rounded-full" src={ actP.userImg } alt="user" />
          </button>
          <Link className="mb-5 mt-5 ml-2" to={ `/user/${actP.userId}` }>
            <h3>{actP.userName}</h3>
          </Link>

        </div>

        <div className="flex flex-row w-1/2 relative justify-end items-center">

          <h6>{JSON.parse(actP.data)}</h6>
          {actP.edit ? (
            actP.userId === user.uid ? (
              <div
                className="absolute bg-black h-28 right-8 border-4
              border-gray-900 top-5 w-96
              flex justify-between p-5 z-50
              "
              >
                <div className="flex flex-col items-start">
                  <button>Apagar Post</button>
                  <button>Compartilhar Post</button>
                </div>
                <button
                  className="absolute right-5"
                  onClick={ () => dispatch(editPost(actP)) }
                >
                  X
                </button>
              </div>
            ) : (
              <div
                className="absolute bg-black h-28 right-8 border-4
              border-gray-900 top-5 w-96
              flex justify-between p-5 z-50
              "
              >
                <div className="flex flex-col items-start">
                  <button>Compartilhar Post</button>
                </div>
                <button
                  className="absolute right-5"
                  onClick={ () => dispatch(editPost(actP)) }
                >
                  X
                </button>
              </div>
            )
          ) : (
            <button className="w-8" onClick={ () => dispatch(editPost(actP)) }>
              <SlOptionsVertical />
            </button>
          )}
        </div>

      </div>

      <div className="flex flex-col relative">

        <button
          onClick={ () => navigate(`/post/${actP.postId}`) }
          className="text-start"
        >
          <p className="break-all pl-5 pr-5">{actP.text}</p>

        </button>
        <div className="flex flex-row w-full justify-around pt-4 pb-2">

          <button
            onClick={ () => setTweet(true) }
            className="w-12 flex flex-row items-center"
          >
            <h6 className="pr-2">{actP.coments.length}</h6>
            <BsChatSquareDots />
          </button>
          {tweet ? (
            <TweetComentM
              reload={ reload }
              setReload={ setReload }
              id={ actP.postId }
              setClose={ setTweet }
              coments={ actP.coments }
            />
          ) : (
            ''
          )}
          <label htmlFor="like" className="flex items-center">
            <h6 className="pr-2">{actP.likes.length}</h6>
            <button
              className="w-12"
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
