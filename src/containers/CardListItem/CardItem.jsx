import "./CardItem.css";
import { useState } from "react";
import BusinessCard from "../BusinessCard/BusinessCard";

const CardItem = ({ businessCard }) => {
    const [showBusinessCard, setShowBusinessCard] = useState(false);

    const itemHeader = (
        <div className="business-card__container-header_container">
            <h3>{businessCard.role} card</h3>
            <button onClick={() => setShowBusinessCard(!showBusinessCard)}>
                {showBusinessCard ? "Close" : "Show"}
            </button>
        </div>
    );

    return (
        <article className="business-card__container">
            {itemHeader}
            {showBusinessCard && <BusinessCard businessCard={businessCard} />}
        </article>
    );
};

export default CardItem;
