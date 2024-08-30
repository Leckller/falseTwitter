import { json, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import FZF from './pages/FZF';
import { auth } from './firebase';
import { user } from './redux/actions/ActionUser';
import { GlobalStyle } from './Styles/Styles';
import Post from './pages/Post';
import './index.css';
import User from './pages/User';

function App() {
  const [login, setLogin] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (usuario) => {
      setLogin(usuario?.displayName as string);
      dispatch(user(usuario));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Route path="/post/:id" element={ <Post /> } />
        <Route path="*" element={ <FZF /> } />
        <Route path="/user/:id" element={ <User /> } />
      </Routes>
    </>
  );
}

export default App;
