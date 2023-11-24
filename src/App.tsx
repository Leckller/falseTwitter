import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore';
import Home from './pages/Home';
import Login from './pages/Login';
import FZF from './pages/FZF';
import { auth, db } from './firebase';
import { user } from './redux/actions/ActionUser';
import { GlobalStyle } from './Styles/Styles';
import { PostsType } from './types';
import { posts } from './redux/actions/ActionPosts';

function App() {
  const [login, setLogin] = useState<string | null>(null);
  const [returnPosts, setReturnPosts] = useState<PostsType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (usuario) => {
      setLogin(usuario?.displayName as string);
      dispatch(user(usuario));
    });
  }, []);
  // const q = query(collection(db, 'Posts'));
  // onSnapshot(q, (querySnapshot) => {
  //   querySnapshot.forEach((u) => {
  //     setReturnPosts([...returnPosts, u.data() as PostsType]);
  //   });
  //   dispatch(posts(returnPosts));
  //   setReturnPosts([]);
  // });

  if (!login) {
    return <Login setLogin={ setLogin } />;
  }
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login setLogin={ setLogin } /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="*" element={ <FZF /> } />
      </Routes>
    </>
  );
}

export default App;
