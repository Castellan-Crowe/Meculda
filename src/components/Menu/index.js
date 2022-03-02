import './styles.scss';
import { NavLink } from 'react-router-dom';
import facebook from '../../../public/facebook.png';
import instagram from '../../../public/instagram.png';
import flickr from '../../../public/flickr.png';

const Menu = () => (
  <div className="menu-container">
    <div className="main-menu">
      <NavLink
        key="/"
        to="/"
      >
        <button className="menu-items">Accueil</button>
      </NavLink>
      <NavLink
        key="/news"
        to="/news"
      >
        <button className="menu-items">Actualités</button>
      </NavLink>
      <NavLink
        key="/Galery"
        to="/Galery"
      >
        <button className="menu-items">Galerie</button>
      </NavLink>
      <NavLink
        key="/Contact"
        to="/Contact"
      >
        <button className="menu-items">Contact</button>
      </NavLink>
    </div>
    <div className="second-menu">
      <a href="https://www.facebook.com/profile.php?id=100013562762344" target="_blank" rel="noreferrer">
        <img className="menu-image" src={facebook} title="facebook" alt="facebook" />
      </a>
      <a href="https://www.instagram.com/meculda/?hl=fr" target="_blank" rel="noreferrer">
        <img className="menu-image" src={instagram} title="instagram" alt="instagram" />
      </a>
      <a href="https://www.flickr.com/photos/ludovicla/with/43104646271/" target="_blank" rel="noreferrer">
        <img className="menu-image" src={flickr} title="flickr" alt="flickr" />
      </a>
    </div>
  </div>
);
export default Menu;
