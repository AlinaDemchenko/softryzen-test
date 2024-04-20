import Link from "next/link";
import PropTypes from 'prop-types';

function Navigation({onToggleMenu, mediaQuery}) {

  const handlerClick = () => {
    if (!onToggleMenu) return
    if ( !mediaQuery){
      onToggleMenu();
    }
  };

  return (
    <nav className="block">
      <ul className="nav-list">
        <li className="nav-link">
          <Link href="/#about" onClick={handlerClick}>
            About
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/#services" onClick={handlerClick}>
            Services
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/#career" onClick={handlerClick}>
            Career
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/#gallery" onClick={handlerClick}>
            Gallery
          </Link>
        </li>
        <li className="inline-block text-lg md:text-sm">
          <Link href="/#contacts" onClick={handlerClick}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Navigation;
