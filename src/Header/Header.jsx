import headerPicture from "./Header.jpg";
import "./Header.css";

const Header = () => {
    return (
        <div className="header-container">
            <img
                src={headerPicture}
                alt="profile"
                className="profile-picture"
            />
            <div className="header-container__title">
                <h1>Federico Bonel</h1>
                <h2>Software Engineer</h2>
                <p>https://github.com/FedericoBonel</p>
            </div>
        </div>
    );
};

export default Header;
