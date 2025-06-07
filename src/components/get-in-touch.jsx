import { Link } from "react-router-dom";
function GetInTouch() {
  return (
    <section className="get-in-touch">
      <div className="git-text">
        <h1>
          Let’s talk about<br></br>your project
        </h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>

      <Link to="/contact" className="hero-link">
        <button aria-label="Contact-us" className="hero-button">
          GET IN TOUCH
        </button>
      </Link>
    </section>
  );
}

export default GetInTouch;
