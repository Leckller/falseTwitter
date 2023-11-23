import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import FZF from './pages/FZF';

function App() {
  const [login, setLogin] = useState<string | null>(null);
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
