import "./HListResultItem.css"

const HListResultItem = () => {
    return (
        <div className="HListResultItem">
            
            <img className="HLRitemImg" src="https://th.bing.com/th/id/OIP.lF5VK1jCX1Jq0Im8ST1FFgHaE8?rs=1&pid=ImgDetMain" alt="hotel room img" />


            <div className="HLRitemContent">
                <h2 className="contentHeading">Tower Street Apartments</h2>
                <div className="contentDistance">500m from center</div>
                <span className="contentTexiOffer">Free airport taxi</span>
                <div className="contentRoomProperties">Studio apartment with air conditioning</div>
                <div className="contentRoomDetail">Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed </div>
                <div className="contentRoomCanclel">Free cancellation</div>
                <div className="contentRoomCancelWarning">You can cancel later , so lock in this great price today!</div>
            </div>


            <div className="HLRitemPricingAndDetails">
                <div className="pricingReviewContainer">
                    <span className="remark">Excellent</span>
                    <span className="pricingReview">8.9</span>
                </div>

                <div className="priceAndBtnConatiner">
                    <span className="roomPrice">$129</span>
                    <span className="roomTaxesAndFees">includes taxes and fees</span>
                    <button className="seeAvailabilityBtn">See Availablility</button>
                </div>
            </div>

        </div>
    )
}

export default HListResultItem