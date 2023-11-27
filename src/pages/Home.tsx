/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { FaGear, FaMessage } from 'react-icons/fa6';
import { FaHome, FaSearch } from 'react-icons/fa';
import { IoNotificationsSharp } from 'react-icons/io5';
import { db } from '../firebase';
import { posts } from '../redux/actions/ActionPosts';
import { GlobalState, PostsType } from '../types';

import PostM from '../components/PostM';
import TweetM from '../components/TweetM';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
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
    <div className="w-screen">
      <header className="flex flex-row justify-between p-2 w-screen">
        <button className="w-10">
          <img
            className="rounded-full"
            src={ user.photoURL }
            alt={ user.displayName }
          />
        </button>
        <button
          className="w-10"
          onClick={ () => navigate('/home') }
        >
          ruytter

        </button>
        <button
          className="w-10"
        >
          <FaGear />
        </button>
      </header>
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
      </main>
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
      <footer className="h-16 bg-black fixed bottom-0 w-screen flex items-center">
        <nav className="w-full flex flex-row justify-around">
          <NavLink to="/home"><FaHome /></NavLink>
          <NavLink to="/home"><FaSearch /></NavLink>
          <NavLink to="/home"><IoNotificationsSharp /></NavLink>
          <NavLink to="/home"><FaMessage /></NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
