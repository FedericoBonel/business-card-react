import "./MainContent.css";

const MainContent = ({ about, interests }) => {
    return (
        <main className="main-content-container">
            <h3>About</h3>
            <p>{about}</p>
            <h3>Interests</h3>
            <p>{`${interests.join(". ")}.`}</p>
        </main>
    );
};

export default MainContent;
