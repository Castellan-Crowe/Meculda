/* eslint-disable jsx-a11y/img-redundant-alt */
// == Import
import './styles.scss';
import backgroundImage from '../../../public/IMG-background.jpg';

// == Composant
const App = () => (
  <div className="app">
    <img className="background" src={backgroundImage} alt="image de meculda" />
    <div className="app-title">
      <h1 className="app-main-title">
        Meculda
      </h1>
      <h2 className="app-subtitle">
        Ludovic Lavialle Photographe
      </h2>
    </div>
  </div>
);

// == Export
export default App;
