import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="foot-cont">
    <ul>
        <li>
          <Link to='https://www.linkedin.com/in/kats-fahad-front-back-end-/'><i className="bx bxl-linkedin"></i></Link>
        </li>
        <li>
          <Link to='https://github.com/KatsFahad'><i className="bx bxl-github"></i></Link>
        </li>
        <li>
          <Link>< i className="bx bxl-twitter"></i></Link>
        </li>
      </ul>
      <ul>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <p>&copy; Katemba Fahad | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
