import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';

function Login({ setLogin }: { setLogin: (p:string) => void }) {
  const navigate = useNavigate();
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((response) => {
      console.log(response);
      setLogin(response.user.email as string);
      navigate('/home');
    });
  };
  return (
    <div>
      <button onClick={ (e) => handleLogin(e) }>Login</button>
    </div>
  );
}

export default Login;
