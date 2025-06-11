import { graphicDesignProjects } from "../SkillsData";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FiArrowRight } from "react-icons/fi";
import GetInTouch from "../components/get-in-touch";

const DesignPage = () => {
  const webProjects = graphicDesignProjects.map((item) => {
    return (
      <div key={uuidv4()} className="web-item">
        <img
          className="web-item-image"
          src={item.image}
          alt={`${item.projectName}-image`}
        />
        <div className="project-details">
          <p className="first-p">{item.projectName.toUpperCase()}</p>
          <p className="second-p">{item.projectDefination}</p>
        </div>
      </div>
    );
  });
  return (
    <main>
      <section className="web-page">
        <h1>Graphic Design</h1>
        <p>
          We deliver eye-catching branding materials that are tailored to meet your business objectives.
        </p>
      </section>

      <section className="web-design-list-section">
        <div className="web-design-lists">{webProjects}</div>
      </section>

      <div className="skills-section w-s-c">
        <Link to="/app-design" className="app-design">
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

        <Link to="/web-design" className="graphic-design">
          <div className="graphic-image-section image"> </div>
          <div className="web-background-div graphic-text">
            <h1 className="graphic-h">WEB DESIGN</h1>
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

export default DesignPage;
