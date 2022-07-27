import "./Card.css";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";

let Card = ({ businessCard }) => {
    return (
        <article className="card-container swing-in-top-fwd">
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
        </article>
    );
};

export default Card = React.memo(Card);
