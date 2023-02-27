import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import BaseStyle from './pages/BaseStyle';
import Contact from './pages/Contact';
import WhyUs from './pages/WhyUs';

import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage title='CRID | Affordable, Stunning, Lead-Generating Websites'/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/why-us' element={<WhyUs/>}/>
            <Route path='/base-style' element={<BaseStyle/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
