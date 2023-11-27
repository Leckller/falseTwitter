import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import { user } from '../redux/actions/ActionUser';
import { LoginDivBg1, LoginDivBg2, LoginDivBg3,
  LoginDivBg4, LoginDivBody } from '../Styles/LoginStyles';

function Login({ setLogin }: { setLogin: (p:string) => void }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((response) => {
      setLogin(response.user.displayName as string);
      dispatch(user(response.user));
      navigate('/home');
    });
  };
  return (
    <LoginDivBody>
      <div>
        <LoginDivBg1 />
        <LoginDivBg2 />
        <LoginDivBg3 />
        <LoginDivBg4 />
      </div>
      <section>
        <button onClick={ (e) => handleLogin(e) }>Logar Com Google</button>
      </section>
    </LoginDivBody>
  );
}

export default Login;
