import { Link } from "react-router-dom";
import heroImage from "../assets/image-hero-phone .png";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { attitudeDiv } from "../data";

function Home() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, [screenSize]);

  const illustrations = attitudeDiv.map((item) => {
    return (
      <div key={item} className="illustration-div">
        <img src={item.image} alt={item.alt} />
        <p className="illustration-p">{item.habit}</p>
        <p className="illustration-text">
         {item.text}
        </p>
      </div>
    );
  });
  return (
    <main>
      <section className="hero-section">
        <div className="hero-texts">
          <h1>
            Award-winning custom<br></br>designs and digital<br></br>branding
            solutions
          </h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link to="/contact" className="hero-link">
            <button aria-label="Contact-us" className="hero-button">
              LEARN MORE
            </button>
          </Link>
        </div>

        <img src={heroImage} alt="hero-image" />
      </section>
      <section className="skills-section">
        <Link className="web-design">
          <div className="web-image-section image"></div>
          <div className="web-background-div">
            <h1>WEB DESIGN</h1>
            <span>
              <p>View projects</p>
              <FiArrowRight />
            </span>
          </div>
          <div className="image-overlay"></div>
        </Link>

        <Link className="app-design">
          <div className="app-image-section image"> </div>
          <div className="web-background-div">
            <h1>APP DESIGN</h1>
            <span>
              <p>View projects</p>
              <FiArrowRight />
            </span>
          </div>
          <div className="image-overlay-app"></div>
        </Link>

        <Link className="graphic-design">
          <div className="graphic-image-section image"> </div>
          <div className="web-background-div graphic-text">
            <h1 className="graphic-h">GRAPHIC DESIGN</h1>
            <span>
              <p>View projects</p>
              <FiArrowRight />
            </span>
          </div>
          <div className="image-overlay-graphics"></div>
        </Link>
      </section>

      <section className="attitudes">
        {illustrations}
      </section>
    </main>
  );
}

export default Home;
