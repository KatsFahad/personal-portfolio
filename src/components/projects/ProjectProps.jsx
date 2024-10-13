/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
const ProjectProps = (props) => {
  return (
        <div className="box-p">
          <div>
            <img src={props.image} alt="img" />
          </div>
          <h2>{props.title}</h2>
          <p>
            {props.text}
          </p>
          <h3>TOOLS:</h3>
          <ul className="tools">
            <li>{props.tool}</li>
          </ul>
          <div className="box-btn">
            <div>
                <Link to={props.to} target="_blank"><button>Check Out</button></Link>
            </div>
            <div>
                <Link to={props.to1} target="_blank"><button>Code <span><i className={props.icon}></i></span></button></Link>
            </div>
          </div>
        </div>
  )
}

export default ProjectProps