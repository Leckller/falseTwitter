/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { useState } from 'react';
import { GlobalState, PostsType } from '../types';
import PostM from '../components/PostM';

function User() {
  const { id } = useParams();
  const { globalPosts } = useSelector((state:GlobalState) => state.PostsReducer);
  const userPosts = globalPosts.filter((p) => p.userId === id);
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const infos = userPosts[0];
  console.log(userPosts);
  return (
    <div>
      <header className="w-screen h-64 border-b border-gray-900 relative flex flex-col">
        <div
          className="w-full h-32 bg-gradient-to-tr from-gray-700 to-gray-900
        flex justify-start items-start p-3"
        >
          <button
            className="rounded-full bg-black w-10 h-10 flex items-center justify-center"
            onClick={ () => navigate(-1) }
          >
            <div className="scale-150">
              <IoArrowUndoOutline />
            </div>
          </button>
        </div>
        <div className="h-1/6">
          <img
            className="rounded-full w-1/5 border-2 border-black absolute top-20 left-5"
            src={ userPosts[0].userImg }
            alt={ userPosts[0].userName }
          />
        </div>
        <div className="h-1/6 flex flex-col">
          <h1 className="pl-5 text-2xl">{infos.userName}</h1>
        </div>
        <div
          className="flex flex-row w-full items-center
        overflow-x-auto overflow-y-hidden"
        >
          <button className="p-3">Publicações</button>
          <button className="p-3">Respostas</button>
          <button className="p-3">Mídia</button>
          <button className="p-3">Curtidas</button>
        </div>
      </header>
      <main className="w-screen h-screen">
        {userPosts && userPosts.map((p) => (
          <PostM
            key={ p.postId }
            actP={ p as PostsType }
            reload={ reload }
            setReload={ setReload }
          />
        ))}
      </main>
    </div>
  );
}

export default User;
