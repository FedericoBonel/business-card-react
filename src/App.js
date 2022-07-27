import "./App.css";
import CardItem from "./components/CardItem/CardItem";
import Card from "./containers/Card/Card";
import { getBusinessCards } from "./api/BusinessCardsApi";

import { useState, useEffect } from "react";

function App() {
    const [businessCards, setBusinessCards] = useState([]);
    const [displayCard, setDisplayCard] = useState({});

    useEffect(() => {
        const fetchBusinessCards = async () => {
            // Fetch all cards from the back-end
            const serverCards = await getBusinessCards();
            setBusinessCards(serverCards);

            // Initialize each card rendering state
            let display = {};
            serverCards.forEach((card) => {
                display[card.id] = false;
            });
            setDisplayCard(display);
        };
        fetchBusinessCards();
    }, []);

    // Whenever a card gets expanded/collapsed
    const onViewCard = (cardId) => {
        let copy = { ...displayCard };
        copy[cardId] = !copy[cardId];
        setDisplayCard(copy);
    };

    return (
        <div className="App">
            {businessCards.length > 0 ? (
                businessCards.map((card) => {
                    const cardItem = (
                        <CardItem
                            businessCard={card}
                            onViewCard={onViewCard}
                            toggled={displayCard[card.id]}
                        />
                    );

                    if (displayCard[card.id]) {
                        return (
                            <article key={`${card.id}-businessCard`}>
                                {cardItem}
                                <Card businessCard={card} />
                            </article>
                        );
                    } else {
                        return (
                            <article key={`${card.id}-businessCard`}>
                                {cardItem}
                            </article>
                        );
                    }
                })
            ) : (
                <p>There are no cards to show yet!</p>
            )}
        </div>
    );
}

export default App;
