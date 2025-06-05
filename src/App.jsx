import { StrictMode, useEffect, useState } from "react";
import "./App.css";
import brandLogo from "./assets/logo-dark.png";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Footer from "./components/Footer";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  const handleBar = () => {
    setNavBar((prev) => !prev);
  };

  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <div className="header-wrapper">
            <Link className="BrandName" to="/">
              <img className="brand-logo" src={brandLogo} alt="Brand-Logo" />
              {/* */}
            </Link>
            {windowWidth >= 800 ? (
              <nav>
                <Link to="/about">ABOUT US</Link>
                <Link to="/location">LOCATION</Link>
                <Link to="/contact">CONTACT</Link>
              </nav>
            ) : (
              <button aria-label={navBar ? "close-icon" : "list-menu"} onClick={handleBar} className="navbar-button">
                {navBar ? (
                  <FiX className="close-icon" />
                ) : (
                  <FaBars className="bars" />
                )}
              </button>
            )}
          </div>
        </header>
        {navBar && windowWidth < 800 ? (
          <section className="navbar-section">
            <nav>
              <Link to="/about">ABOUT US</Link>
              <Link to="/location">LOCATION</Link>
              <Link to="/contact">CONTACT</Link>
            </nav>
          </section>
        ) : null}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
