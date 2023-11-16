import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import Menu from '../../assets/menu.svg';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <Link to="/">
          <img className='Navbar-Logo' src={Logo} alt="logo" />
        </Link>
      </div>
      <div>
        <img className='Navbar-Menu' src={Menu} alt="menu" />
      </div>
    </div>
  );
}

export default Navbar;
