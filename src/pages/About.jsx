import worldBestTalent from "../assets/image-world-class-talent.webp"
function About() {
  return (
    <main>
      <section className="about-us">
        <div className="first-section-text">
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that conn ect with our clients' audiences.
          </p>
        </div>

        <div className="image-wrapper"></div>
      </section>

      <section className="world-class-talent">
        <div className="w-c-t-text">
          <h1>World-class talent</h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>

        <div className="wct-image-wrapper">
            <img src={worldBestTalent} alt="world-best-talent" />
        </div>
      </section>
    </main>
  );
}

export default About;
