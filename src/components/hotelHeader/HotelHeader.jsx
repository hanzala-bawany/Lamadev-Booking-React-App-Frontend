import './HotelHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const HotelHeader = () => {
    return (
        <div className="hotelHeader">

            <div className="hotelHeaderContent">
                <h1 className="headerHotelName">grand hotel</h1>
                <div className="hotelLocation">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Elton St 125 new york
                </div>
                <div className="locationRemarks">Excellect location-500m from center</div>
                <div className="hotelHeaderTaxiOffer">Book a stay over $114 at this property and get a free airport taxi</div>
            </div>

            <button className="hotelHeaderBtn">
                Reserve or book now!
            </button>

        </div>
    )
}

export default HotelHeader