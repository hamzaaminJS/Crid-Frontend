import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import BaseStyle from './pages/BaseStyle';
import Contact from './pages/Contact';
import WhyUs from './pages/WhyUs';
import DarkContainer from './components/DarkContainer';

import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/why-us' element={<WhyUs/>}/>
            <Route path='/base-style' element={<BaseStyle/>}/>
            <Route path='/test' element={<DarkContainer/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
