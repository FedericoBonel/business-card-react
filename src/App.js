import "./App.css";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import { useState } from "react";

function App() {
    const [businessCard, setBusinessCard] = useState({
        role: "Software Engineer",
        portfolioUrl: "https://github.com/FedericoBonel",
        email: "bonelfederico@gmail.com",
        linkedInUrl: "https://www.linkedin.com/in/federico-jorge-bonel-tozzi/",
        about: "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
        interests: [
            "Cooking",
            "Wood working",
            "Reading",
            "Hiking",
            "Horse Riding",
            "Traveling",
            "Animals",
            "Coffee fanatic",
        ],
        twitterUrl: "https://twitter.com",
        facebookUrl: "https://facebook.com",
        instagramUrl: "https://www.instagram.com/fedebonel26/",
    });

    return (
        <div className="App">
            <Header
                role={businessCard.role}
                portfolio={businessCard.portfolioUrl}
            />
            <Contact
                email={businessCard.email}
                linkedInUrl={businessCard.linkedInUrl}
            />
            <MainContent
                about={businessCard.about}
                interests={businessCard.interests}
            />
            <Footer
                twitterUrl={businessCard.twitterUrl}
                facebookUrl={businessCard.facebookUrl}
                instagramUrl={businessCard.instagramUrl}
            />
        </div>
    );
}

export default App;
