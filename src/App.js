import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
          <Home />
          <AboutMe />
          <Portfolio />
          <ContactMe />
    </div>
  );
}

export default App;
