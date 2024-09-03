/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaGear } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function Header() {
  const user = { photoURL: '', displayName: '', uid: '' };
  const navigate = useNavigate();
  return (
    <header className="flex flex-row justify-between p-2 w-screen">
      <button className="w-10" onClick={ () => navigate(`/user/${user.uid}`) }>
        <img
          className="rounded-full"
          src={ user.photoURL }
          alt={ user.displayName }
        />
      </button>
      <button
        className="w-10"
        onClick={ () => navigate('/home') }
      >
        ruytter

      </button>
      <button
        className="w-10"
      >
        <FaGear />
      </button>
    </header>
  );
}

export default Header;
