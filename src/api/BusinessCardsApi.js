const CARDS_URL = `http://localhost:3500`;

export const getBusinessCards = async () => {
    try {
        const response = await fetch(`${CARDS_URL}/businessCards`, {
            method: "GET",
        });
        const businessCards = await response.json();

        return businessCards;
    } catch (error) {
        console.log(`Error while fetching cards ${error.message}`)
    }
};
