import "./BusinessCard.css";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import React from "react";
import MainContent from "../../components/MainContent/MainContent";
import Footer from "../../components/Footer/Footer";

let BusinessCard = ({ businessCard }) => {
    return (
        <article className="card-container swing-in-top-fwd">
            <Header
                name={businessCard.name}
                role={businessCard.role}
                portfolio={businessCard.portfolioUrl}
                profileImg={businessCard.profileImg}
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

export default BusinessCard = React.memo(BusinessCard);
