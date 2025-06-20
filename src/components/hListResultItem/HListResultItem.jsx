import "./HListResultItem.css"
import { Link } from "react-router-dom"

const HListResultItem = ({ card }) => {
    return (
        <div className="HListResultItem">

            <img className="HLRitemImg" src={card?.photos?.[0]} alt="hotel room img" />


            <div className="HLRitemContent">
                <h2 className="contentHeading">{card?.name}</h2>
                <div className="contentDistance">{card?.distance}</div>
                <span className="contentTexiOffer">Free airport taxi</span>
                <div className="contentRoomProperties">Studio apartment with air conditioning</div>
                <div className="contentRoomDetail">{card.discr}</div>
                <div className="contentRoomCanclel">Free cancellation</div>
                <div className="contentRoomCancelWarning">You can cancel later , so lock in this great price today!</div>
            </div>


            <div className="HLRitemPricingAndDetails">
                {/* {card.rating && */}
                    <div className="pricingReviewContainer">
                        <span className="remark">{card?.rating ? "Superb" : "No Review Yet"}</span>
                        <span className="pricingReview">{card?.rating || "0"}</span>
                    </div>
                {/* } */}

                <div className="priceAndBtnConatiner">
                    <span className="roomPrice">Rs {card?.cheapestPrice}</span>
                    <span className="roomTaxesAndFees">Includes taxes and fees</span>
                    <Link to={`/hotels/${card?._id}`}>
                        <button className="seeAvailabilityBtn">See Availablility</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HListResultItem