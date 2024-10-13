import { Link } from "react-router-dom";
const ContactBody = () => {
  return (
    <div className="contact-b">
      <div className="contact-b1">
        <h2>
          Lets talk about <br /> Your Project
        </h2>
        <div>
          <div className="cont-no">
            <div>
                <span><i className='bx bxs-phone-call bx-burst' style={{'color':'#2a750a'}} ></i></span>
            </div>
            <div>
                <span>+256 780443224</span><br />
                <span>+256 740730110</span>
            </div>
          </div>
        </div>
        <p>
          <span><i className='bx bxl-gmail bx-tada' style={{'color':'#6e750a'}}  ></i></span>katsfahad008@gmail.com
        </p>
        <div>
          <button>
            <span><i className='bx bxs-download' style={{'color':'#22291f'}}  ></i></span>Download Resume
          </button>
        </div>
        <ul>
          <li>
            <Link to='https://www.linkedin.com/in/kats-fahad-front-back-end-/' target="_blank">
              <i className="bx bxl-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link to='https://github.com/KatsFahad' target="_blank">
              <i className="bx bxl-github"></i>
            </Link>
          </li>
          <li>
            <Link to='https://x.com/FahadKats' target="_blank">
              <i className="bx bxl-twitter"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p>
          <span>What&apos;s your story ? </span>Get in touch.I&apos;m always
          Freelancing if the <br /> right project comes along.
        </p>
        <div className="input-f">
          <input type="text" placeholder="Enter your name" />
          <br />
          <input type="text" placeholder="Enter your Email address" />
          <br />
          <textarea placeholder="Tell me more about your project, needs, and timeline or make an inquiry"></textarea>
          <br />
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
