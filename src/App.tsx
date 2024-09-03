import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { auth } from './firebase';
import { user } from './redux/actions/ActionUser';
import { GlobalStyle } from './Styles/Styles';
import Post from './pages/Post';
import User from './pages/User';
import './index.css';
import Layout from './components/Layout/Layout';

function App() {
  const [login, setLogin] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (usuario) => {
      setLogin(usuario?.displayName as string);
      localStorage.setItem('userPass', JSON.stringify(usuario));
      dispatch(user(usuario));
    });
  }, []);

  if (!login) {
    return <Login setLogin={ setLogin } />;
  }
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login setLogin={ setLogin } /> } />
        <Route element={ <Layout /> }>
          <Route path="/home" element={ <Home /> } />
        </Route>
        <Route path="/post/:id" element={ <Post /> } />
        <Route path="/user/:id" element={ <User /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
