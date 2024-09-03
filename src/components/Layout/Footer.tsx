import { FaHome, FaSearch } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoNotificationsSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="h-16 bg-black fixed bottom-0 w-screen flex items-center">
      <nav className="w-full flex flex-row justify-around">
        <NavLink to="/home"><FaHome /></NavLink>
        <NavLink to="/home"><FaSearch /></NavLink>
        <NavLink to="/home"><IoNotificationsSharp /></NavLink>
        <NavLink to="/home"><FaMessage /></NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
