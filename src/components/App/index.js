/* eslint-disable jsx-a11y/img-redundant-alt */
// == Import
import './styles.scss';
import Menu from '../Menu';

// == Composant
const App = () => (
  <div className="app">
    <div className="app-title">
      <h1 className="app-main-title">
        Meculda
      </h1>
      <h2 className="app-subtitle">
        Ludovic Lavialle Photographe
      </h2>
    </div>
    <Menu />
  </div>
);

// == Export
export default App;
