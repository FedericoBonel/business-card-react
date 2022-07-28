import "./App.css";
import { getBusinessCards } from "./api/BusinessCardsApi";

import { useState, useEffect } from "react";
import CardList from "./containers/BusinessCardList/BusinessCardList";

function App() {
    const [businessCards, setBusinessCards] = useState([]);

    useEffect(() => {
        const fetchBusinessCards = async () => {
            // Fetch all cards from the back-end
            const serverCards = await getBusinessCards();
            setBusinessCards(serverCards);
        };
        fetchBusinessCards();
    }, []);

    return (
        <div className="App">
            <CardList businessCards={businessCards}/>
        </div>
    );
}

export default App;
