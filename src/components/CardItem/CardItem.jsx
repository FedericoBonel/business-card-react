import "./CardItem.css";

const CardItem = ({ businessCard, onViewCard, toggled }) => {
    return (
        <article className="card-item-container">
            <h3>{businessCard.role} card</h3>
            <button onClick={() => onViewCard(businessCard.id)}>
                {toggled ? "Close" : "Show"}
            </button>
        </article>
    );
};

export default CardItem;
