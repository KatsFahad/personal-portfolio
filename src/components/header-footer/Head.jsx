import { Link } from "react-router-dom";
const Head = () => {
  return (
    <div className="head-cont">
      <h1>
        <Link to="/">Fahad</Link>
      </h1>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Head;
