import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer-container">
            <a rel="noreferrer" href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a rel="noreferrer" href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a rel="noreferrer" href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    );
};

export default Footer;
