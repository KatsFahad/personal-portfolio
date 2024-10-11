import { Link } from "react-router-dom"
const ContactBody = () => {
  return (
    <div className="contact-b">
        <div>
            <h2>Lets talk about <br /> Your Project</h2>
            <div>
                <p>+256 780443224</p>
                <p>+256 740730110</p>
            </div>
            <p><span></span>katsfahad008@gmail.com</p>
            <div>
                <button><span></span>Download Resume</button>
            </div>
            <ul>
                <li><Link><i className="bx bxl-linkedin"></i></Link></li>
                <li><Link>< i className="bx bxl-twitter"></i></Link></li>
                <li><Link><i className="bx bxl-github"></i></Link></li>
            </ul>
        </div>
        <div>
            <p><span>What&apos;s your story ? </span>Get in touch.I&apos;m always Freelancing if the <br /> right project comes along.</p>
            <div>
                <input type="text"placeholder="Enter your name" />
                <br />
                <input type="text" placeholder="Enter your Email address" />
                <br />
                <textarea placeholder="Tell me more about your project, needs, and timeline or make an inquiry"></textarea>
                <br />
                <button>Send Message</button>
            </div>    
        </div>

    </div>
  )
}

export default ContactBody