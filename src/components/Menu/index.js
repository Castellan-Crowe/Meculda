import './styles.scss';
import facebook from '../../../public/facebook.png';
import instagram from '../../../public/instagram.png';
import flickr from '../../../public/flickr.png';

const Menu = () => (
  <div className="menu-container">
    <div className="main-menu">
      <div className="menu-items">Accueil</div>
      <div className="menu-items">Actualités</div>
      <div className="menu-items">Galerie</div>
      <div className="menu-items">Contact</div>
    </div>
    <div className="second-menu">
      <a href="https://www.facebook.com/profile.php?id=100013562762344" target="_blank">
        <img className="menu-image" src={facebook} title="facebook" alt="facebook" />
      </a>
      <a href="https://www.instagram.com/meculda/?hl=fr" target="_blank">
        <img className="menu-image" src={instagram} title="instagram" alt="instagram" />
      </a>
      <a href="https://www.flickr.com/photos/ludovicla/with/43104646271/" target="_blank">
        <img className="menu-image" src={flickr} title="flickr" alt="flickr" />
      </a>
    </div>
  </div>
);
export default Menu;
