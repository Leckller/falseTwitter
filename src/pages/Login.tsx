import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth, provider } from '../firebase';
import { user } from '../redux/actions/ActionUser';

function Login({ setLogin }: { setLogin: (p:string) => void }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userPass = JSON.parse(localStorage.getItem('userPass')!);
    if (userPass) {
      setLogin(userPass.displayName);
      dispatch(user(userPass));
      navigate('/home');
    }
  }, []);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((response) => {
      setLogin(response.user.displayName as string);
      dispatch(user(response.user));
      navigate('/home');
    });
  };
  return (
    <main
      className="w-screen h-screen flex justify-center
      items-center relative
    "
    >
      <section
        className=" w-80 h-[80%] bg-[#0088ff] flex
        justify-around items-center
      "
      >
        <button
          className="w-[80%] p-5 "
          onClick={ (e) => handleLogin(e) }
        >
          Logar Com Google
        </button>
      </section>
    </main>
  );
}

export default Login;
