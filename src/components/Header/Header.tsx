import { NavLink } from 'react-router-dom';

const getActiveLinkClassName = (isActive: boolean) => (isActive ? 'link link--active' : 'link');

const Header = () => (
  <header className="row text-center">
    <nav className="navigation">
      <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/characters">Characters</NavLink>
      <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/episodes">Episodes</NavLink>
      <NavLink className={({ isActive }) => getActiveLinkClassName(isActive)} to="/locationes">Locations</NavLink>
    </nav>
  </header>
);
export default Header;
