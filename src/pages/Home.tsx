/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import Tweetar from '../components/Tweetar';
import { db } from '../firebase';
import { posts } from '../redux/actions/ActionPosts';
import { GlobalState, PostsType } from '../types';
import { HomeStyle } from '../Styles/Styles';
import { HomeDivBody, HomeFooter, HomeHeader, HomeMain } from '../Styles/HomeStyles';

function Home() {
  const [close, setClose] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
  const { globalPosts } = useSelector((state:GlobalState) => state.PostsReducer);
  console.log(globalPosts);
  useEffect(() => {
    // dispatch(posts(returnPosts));
    const data = new Date().toJSON();
    console.log(data);
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
  if (window.innerWidth <= 550) {
    return (
      <HomeDivBody>
        <HomeHeader>
          <button><img src={ user.photoURL } alt={ user.displayName } /></button>
          <button onClick={ () => navigate('/home') }>X</button>
          <button>C</button>
        </HomeHeader>
        <HomeMain>
          {globalPosts && globalPosts.map((actP, i) => (
            <article key={ actP.userName + i }>
              <img src={ actP.userImg } alt="user" />
              <div>
                <Link to={ `/user/${actP.userName}` }>
                  <h3>{actP.userName}</h3>
                </Link>
                <h6>{actP.data.split('T')[1].split('.')[0]}</h6>
              </div>
              <p>{actP.text}</p>
              <div />
            </article>
          ))}
          {close === true ? (
            <button onClick={ () => setClose(!close) }>T</button>
          ) : (
            <Tweetar close={ close } setClose={ setClose } />
          )}
        </HomeMain>
        <HomeFooter>
          <nav>
            <NavLink to="/home">home</NavLink>
            <NavLink to="/home">Search</NavLink>
            <NavLink to="/home">not</NavLink>
            <NavLink to="/home">mess</NavLink>
          </nav>
        </HomeFooter>
      </HomeDivBody>
    );
  }
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
                <div>
                  <Link to={ `/user/${actP.userName}` }>
                    <h3>{actP.userName}</h3>
                  </Link>
                  <h6>{actP.data.split('T')[1].split('.')[0]}</h6>
                </div>
                <p>{actP.text}</p>
                <div />
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
