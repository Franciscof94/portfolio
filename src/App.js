import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Header />  */}
          <Home />
          <AboutMe />
          <Portfolio />
          <ContactMe />
        <Routes>
            {/* <Route path='/contactme' element={<ContactMe />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/aboutme' element={<AboutMe />}></Route> 
            <Route path='/' element={<Home />} ></Route>  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
