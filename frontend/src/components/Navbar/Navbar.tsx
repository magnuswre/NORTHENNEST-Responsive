import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import Menu from '../../assets/menu.svg';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import HeroSearch from '../HeroSearch/HeroSearch';
import UserLoginIcon from '../../assets/🦆 icon _User Circle_.svg'

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div>
      {isMobile ?
        <div className="Navbar">
          <div>
            <Link to="/">
              <img className='Navbar-Logo' src={Logo} alt="logo" />
            </Link>
          </div>
          <div>
            <img className='Navbar-Menu' src={Menu} alt="menu" />
          </div>
        </div> :

        // NAVBAR AND HERO SEARCH IN DESKTOP VIEW - HOME 
        < >

          <div className='Desktop-Navbar'>
            <div className='Desktop-NavBar-Navbar'>
              <div>
                <Link to="/">
                  <img className='Desktop-NavBar-Logo' src={Logo} alt="logo" />
                </Link>
              </div>
              <div className='Desktop-NavBar-LinksAndIcon'>
                <NavLink className='Desktop-NavBar-NavLinks' to='/'>Navlink</NavLink>
                <NavLink className='Desktop-NavBar-NavLinks' to='/'>Navlink</NavLink>
                <img src={UserLoginIcon} alt="" />
              </div>
            </div>
            <div className='Desktop-NavBar-Title'>
              <h1>Explore our luxury & <br></br> 
                romantic cabins for couples</h1>
            </div>
            <div className='Desktop-NavBar-HeroSearch'>
              <HeroSearch />
            </div>
          </div>
        </>
      }

    </div>
  );
}

export default Navbar;
