import { appDesignProjects } from "../SkillsData";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FiArrowRight } from "react-icons/fi";
import GetInTouch from "../components/get-in-touch";

const AppPage = () => {
  const appProjects = appDesignProjects.map((project) => {
    return (
      <div key={uuidv4()} className="web-item">
        <img
          className="web-item-image"
          src={project.image}
          alt={`${project.projectName}-image`}
        />
        <div className="project-details">
          <p className="first-p">{project.projectName.toUpperCase()}</p>
          <p className="second-p">{project.projectDefination}</p>
        </div>
      </div>
    );
  });

  return (
    <main>
      <section className="web-page">
        <h1>App Design</h1>
        <p>
          Our mobile designs brings intuitive digital solutions to your
          customers right at thier fingertips
        </p>
      </section>

      <section className="web-design-list-section">
        <div className="web-design-lists">{appProjects}</div>
      </section>

      <div className="skills-section w-s-c">
        <Link to="/web-design" className="app-design">
          <div className="app-image-section image"> </div>
          <div className="web-background-div">
            <h1>WEB DESIGN</h1>
            <span>
              <p>View projects</p>
              <FiArrowRight />
            </span>
          </div>
          <div className="image-overlay-app"></div>
        </Link>

        <Link to="/graphic-design" className="graphic-design">
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
      </div>
      <GetInTouch />
    </main>
  );
};

export default AppPage;
