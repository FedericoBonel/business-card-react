import "./App.css";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Contact />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
