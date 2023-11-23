import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import FZF from './pages/FZF';
import { auth } from './firebase';

function App() {
  const [login, setLogin] = useState<string | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLogin(user?.displayName as string);
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
