import { Link } from "react-router-dom";
const HomeBody = () => {
  return (
    <div className="home-cont">
      <div>
        <h6>Hello there, My name is: <br />
        <span>Katemba Fahad </span>
        </h6>
        <p>
          I am a dedicated Software Engineer with a primary focus on delivering <br />
          value and innovative solutions <br />
          through the application of my skills and expertise.
        </p>
      </div>
      <div>
        <Link to="/about">
          <button>Get Started &gt;</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBody;
