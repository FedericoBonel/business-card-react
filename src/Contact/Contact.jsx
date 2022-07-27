import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    return (
        <div className="contact-container">
            <a
                href="mailto:bonelfederico@gmail.com"
                target="_blank"
                rel="noreferrer"
                id="email-btn"
                className="contant-container__btn"
            >
                <FontAwesomeIcon icon={faEnvelope} id="email-icon" />
                Email
            </a>
            <a
                href="https://www.linkedin.com/in/federico-jorge-bonel-tozzi/"
                target="_blank"
                rel="noreferrer"
                id="linkedIn-btn"
                className="contant-container__btn"
            >
                <FontAwesomeIcon icon={faLinkedin} id="linkedIn-icon" />
                LinkedIn
            </a>
        </div>
    );
};

export default Contact;
