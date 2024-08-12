import Benefits from './Screens/Benefits';
import Contact from './Screens/Contact';
import Home from './Screens/Home';
import HowWeWork from './Screens/HowWeWork';
import Services from './Screens/Services';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Benefits />
      <HowWeWork />
      <Contact />
    </div>
  );
}

export default App;
