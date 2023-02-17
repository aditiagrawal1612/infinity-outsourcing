import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import Registeration from "./containers/Registeration";
import Services from "./containers/Services";

function App() {
  return (
    <div>
      <Home />
      <Services />
      <About />
      <Contact />
      <Registeration />
      <Footer />
    </div>
  );
}

export default App;
