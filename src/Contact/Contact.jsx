import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = ({email, linkedInUrl}) => {
    return (
        <div className="contact-container">
            <a
                href={`mailto:${email}`}
                rel="noreferrer"
                target="_blank"
                id="email-btn"
                className="contant-container__btn"
            >
                <FontAwesomeIcon icon={faEnvelope} id="email-icon" />
                Email
            </a>
            <a
                href={linkedInUrl}
                rel="noreferrer"
                target="_blank"
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
