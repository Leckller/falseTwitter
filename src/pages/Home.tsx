/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import Tweetar from '../components/Tweetar';
import { db } from '../firebase';
import { posts } from '../redux/actions/ActionPosts';
import { GlobalState, PostsType } from '../types';
import { HomeStyle } from '../Styles/Styles';

function Home() {
  const [close, setClose] = useState(true);
  const dispatch = useDispatch();
  const { globalPosts } = useSelector((state:GlobalState) => state.PostsReducer);
  console.log(globalPosts);
  useEffect(() => {
    // dispatch(posts(returnPosts));
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
  }, [close]);
  return (
    <HomeStyle close={ close }>
      <header>
        <nav>
          <NavLink to="/home">X</NavLink>
          <NavLink to="/home">Página Inicial</NavLink>
          {close === true ? (
            <button onClick={ () => setClose(!close) }>Tweetar</button>
          ) : (
            <Tweetar close={ close } setClose={ setClose } />
          )}
        </nav>
      </header>
      <main>
        <section>
          <div>
            <label htmlFor="textAreaTweet">
              <textarea
                maxLength={ 350 }
                name="Tweet"
                id="textAreaTweet"
                // onChange={ (e) => setSubmitForm({ ...SubmitForm, text: e.target.value }) }
              />
            </label>
          </div>
          <div>
            {globalPosts && globalPosts.map((actP, i) => (
              <article key={ actP.userName + i }>
                <h3>{actP.userName}</h3>
                <p>{actP.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="search">
              Buscar
              <input type="text" name="search" />
            </label>
          </div>
          <div>
            Quem seguir
            {[]}
          </div>
        </section>
      </main>
    </HomeStyle>
  );
}

export default Home;
