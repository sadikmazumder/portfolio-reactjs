import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";

import Navbar from "./components/navBar";
import particlesConfiguration from "./helpers/particlesConfiguration";
import Theme from "./components/theme";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  const renderParticleJsIfCurrentPage = location.pathname === "/portfolio-reactjs/";
  return (
    <div className="App">
      {/* particle JS */}
      {renderParticleJsIfCurrentPage && (
        <Particles
          id="particles"
          options={particlesConfiguration}
          init={particlesInit}
        />
      )}

      {/* navbar component */}

      <div className="App__navbar-wrapper">
        <Navbar />
      </div>

      {/* main page content */}
      <div className="App__main-content-wrapper">
        {/* <Theme /> */}
        <Routes>
          {/* create all routes */}

          <Route index path="/portfolio-reactjs/" element={<Home />} />
          <Route index path="/portfolio-reactjs/about" element={<About />} />
          <Route index path="/portfolio-reactjs/resume" element={<Resume />} />
          <Route index path="/portfolio-reactjs/skills" element={<Skills />} />
          <Route index path="/portfolio-reactjs/portfolio" element={<Portfolio />} />
          <Route index path="/portfolio-reactjs/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
