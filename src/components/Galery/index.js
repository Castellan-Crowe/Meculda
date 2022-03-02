import './styles.scss';
import test from '../../../public/test.jpg';

// == Composant
const Galery = () => (
  <div className="galery-container">
    <div className="slider">
      <figure className="slider-figure">
        <img className="slider-image" src={test} alt="photos paysage" />
        <img className="slider-image" src={test} alt="photos paysage" />
        <img className="slider-image" src={test} alt="photos paysage" />
        <img className="slider-image" src={test} alt="photos paysage" />
        <img className="slider-image" src={test} alt="photos paysage" />
      </figure>
    </div>
    <div className="galery">
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
      <a href={test} alt="image" target="_blank" rel="noreferrer">
        <img className="galery-image" src={test} alt="photos paysage" />
      </a>
    </div>
  </div>
);
// == Export
export default Galery;
