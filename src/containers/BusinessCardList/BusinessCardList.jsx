import "./BusinessCardList.css";
import CardItem from "../CardListItem/CardItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons";

const BusinessCardList = ({ businessCards }) => {
    return (
        <section>
            {businessCards.length > 0 ? (
                businessCards.map((card) => <CardItem businessCard={card} />)
            ) : (
                <div className="loading-list__container">
                    <p>
                        We're loading your business cards, if this is taking too
                        long there could be an issue with your connection or the server data-base.
                    </p>
                    <FontAwesomeIcon icon={faDharmachakra} spin size="6x" />
                </div>
            )}
        </section>
    );
};

export default BusinessCardList;
