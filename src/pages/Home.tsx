/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import Tweetar from '../components/Tweetar';
import { db } from '../firebase';
import { posts } from '../redux/actions/ActionPosts';

type HomeStyleType = {
  close: boolean,
};

const HomeStyle = styled.div<HomeStyleType>`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  filter: ${(props) => (!props.close ? 'blur(0)' : 'blur(0)')};
  header{
    padding-top: 20px;
    width: 30vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    nav{
      position: relative;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
      a, button{
        cursor: pointer;
        text-decoration: none;
        padding: 10px;
        transition: 1000ms;
        &:hover{
          transition: 1000ms;
          border-radius: 10px;
          background-color: #ffffff22;
        }
      }
      button{
          background-color: transparent;
          border: none;
        }
    }
  }
  main{
    width: 70vw;
    display: flex;
    flex-direction: row;
    section:nth-child(1){
      width: 50%;
      border: solid #151719 1px;
      div:nth-child(1){
        width: 100%;
        height: 150px;
        border-bottom: solid #151719 1px;
        padding-top: 10px;
        label{
          padding: 10px;
          textarea{
            width: 100%;
            resize: none;
            background-color: transparent;
            border: none;
            outline: none;
            height: 150px;
          }
    }
      }
    }
  }
`;

function Home() {
  const [close, setClose] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(posts(returnPosts));
    const effect = async () => {
      const q = query(collection(db, 'Posts'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((resp) => {
        // resp.data() is never undefined for query resp snapshots
        console.log(resp.id, ' => ', resp.data());
      });
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
            posts
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
