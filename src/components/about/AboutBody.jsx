import img from "../../images/20240611_211619 (1).jpg";
import { Link } from "react-router-dom";
import Skills from "../../skills/Skills";
const AboutBody = () => {
  return (
    <div>
        <div className="about-b">
      <div className="about-img">
        <img src={img} alt="img" />
      </div>
      <div className="about-t">
        <h4>About Me</h4>
        <p>
          My name is <span>KATEMBA FAHAD</span> I am a passionate <span>Full-Stack</span> web developer
          with experience in creating dynamic and responsive applications. My
          skills encompass both frontend and backend technologies, and I enjoy
          working on projects that require integration between these layers. I
          have a foundation in HTML, CSS, JavaScript, and React for building
          user interfaces, while my backend expertise includes Node.js,
          Express.js and PostgreSQL for creating scalable and secure server-side
          applications.
        </p>
        <div>
          <Link to="/contact">
            <button>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
    <Skills/>
    </div>
  );
};

export default AboutBody;
