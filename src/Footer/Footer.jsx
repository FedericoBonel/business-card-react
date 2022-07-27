import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ twitterUrl, instagramUrl, facebookUrl }) => {
    return (
        <div className="footer-container">
            <a rel="noreferrer" href={twitterUrl} target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a rel="noreferrer" href={facebookUrl} target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a rel="noreferrer" href={instagramUrl} target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    );
};

export default Footer;
