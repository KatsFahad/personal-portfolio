import { Link } from "react-router-dom"
const Head = () => {
  return (
    <div className="head-cont">
        <h1><Link to='/'>Fahad</Link></h1>
        <ul>
            <li><Link>About</Link></li>
            <li><Link>Projects</Link></li>
            <li><Link>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Head