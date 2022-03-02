/* eslint-disable jsx-a11y/img-redundant-alt */
// == Import
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import Menu from '../Menu';
import Home from '../Home';
import News from '../News';
import Galery from '../Galery';
import Contact from '../Contact';

// == Composant
const App = () => (
  <div className="app">
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/galery" element={<Galery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

// == Export
export default App;
