import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="foot-cont">
    <ul>
        <li>
          <Link><i className="bx bxl-linkedin"></i></Link>
        </li>
        <li>
          <Link>< i className="bx bxl-twitter"></i></Link>
        </li>
        <li>
          <Link><i className="bx bxl-github"></i></Link>
        </li>
      </ul>
      <ul>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='skils'>Skills</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <p>&copy; Katemba Fahad | All Rights Reserved</p>
    </div>
  );
};

export default Footer;
