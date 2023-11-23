import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import FZF from './pages/FZF';
import { auth } from './firebase';
import { user } from './redux/actions/ActionUser';

function App() {
  const [login, setLogin] = useState<string | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (usuario) => {
      setLogin(usuario?.displayName as string);
      dispatch(user(usuario));
    });
  }, []);
  if (!login) {
    return <Login setLogin={ setLogin } />;
  }
  return (
    <Routes>
      <Route path="/" element={ <Login setLogin={ setLogin } /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="*" element={ <FZF /> } />
    </Routes>
  );
}

export default App;
