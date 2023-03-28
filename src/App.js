import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";

import OurWork from "./components/OurWork";
import Tech from "./components/Tech";
function App() {
  return (
    <div className="text-xl text-center">
      <Header />
      <Hero />
      <OurWork />
      <Tech />
      <Services />
      <Process />
      <About />
      <Contact />
    </div>
  );
}

export default App;
