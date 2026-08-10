import "./About.css";
import profilePic from "../../assets/images/pfp.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        <figure>
          <img
            src={profilePic}
            alt="Aadhya S"
            className="profile-image"
          />
          <figcaption>Aadhya S</figcaption>
        </figure>

        <div className="about-text">
          <p>
            Hi! I'm <strong>Aadhya S</strong>, a passionate web developer
            who enjoys building responsive and interactive websites.
          </p>

          <p>
            I'm currently learning <strong>React</strong> and modern web
            technologies while continuously improving my front-end and
            full-stack development skills.
          </p>

          <p>
            My goal is to create clean, user-friendly applications and keep
            learning new technologies along the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
