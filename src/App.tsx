import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import Home from './pages/Home';
import Login from './pages/Login';
import FZF from './pages/FZF';
import { auth, db } from './firebase';
import { user } from './redux/actions/ActionUser';
import { GlobalStyle } from './Styles/Styles';
import Post from './pages/Post';
import './index.css';
import User from './pages/User';

function App() {
  const [login, setLogin] = useState<string | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = new Date();
    const dataRef = [data.toDateString().split(' '), data.toLocaleTimeString()];
    onAuthStateChanged(auth, async (usuario) => {
      setLogin(usuario?.displayName as string);
      dispatch(user(usuario));
      const q = query(collection(db, 'Users'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (resp) => {
        if (resp.data().userId === usuario?.uid) {
          return console.log('bem vindo!');
        }
        await setDoc(doc(db, 'Users', usuario?.uid as string), {
          userId: usuario?.uid,
          userName: usuario?.displayName,
          data: JSON.stringify(dataRef),
          userImg: usuario?.photoURL,
          likes: [],
          uidPersonalizado: usuario?.uid,
          edit: false,
          coments: [],
        });
      });
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
