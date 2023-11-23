import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import { user } from '../redux/actions/ActionUser';

function Login({ setLogin }: { setLogin: (p:string) => void }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((response) => {
      console.log(response);
      setLogin(response.user.displayName as string);
      dispatch(user(response.user));
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
