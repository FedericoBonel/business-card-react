import "./Header.css";

const Header = ({ name, role, portfolio, profileImg }) => {
    // Make sure to remove the protocol
    const portfolioNoProt = portfolio
        .replace("https://", "")
        .replace("http://", "");

    return (
        <header className="header-container">
            <img src={profileImg} alt="profile" className="profile-picture" />
            <div className="header-container__title">
                <h1>{name}</h1>
                <h2>{role}</h2>
                <a rel="noreferrer" target="_blank" href={portfolio}>
                    {portfolioNoProt}
                </a>
            </div>
        </header>
    );
};

export default Header;
