import headerPicture from "./Header.jpg";
import "./Header.css";

const Header = ({role, portfolio}) => {

    const portfolioNoProt = portfolio.replace("https://", "").replace("http://", "");

    return (
        <div className="header-container">
            <img
                src={headerPicture}
                alt="profile"
                className="profile-picture"
            />
            <div className="header-container__title">
                <h1>Federico Bonel</h1>
                <h2>{role}</h2>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href={portfolio}
                >
                    {portfolioNoProt}
                </a>
            </div>
        </div>
    );
};

export default Header;
