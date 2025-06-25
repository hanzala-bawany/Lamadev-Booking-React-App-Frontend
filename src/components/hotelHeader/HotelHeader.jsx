import './HotelHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const HotelHeader = ({data}) => {
    return (
        <div className="hotelHeader">

            <div className="hotelHeaderContent">
                <h1 className="headerHotelName">{data?.name}</h1>
                <div className="hotelLocation">
                    <FontAwesomeIcon icon={faLocationDot} />
                    { data?.address?.slice(0,1).toUpperCase() }{ data?.address.slice(1) }
                </div>
                <div className="locationRemarks">Excellect location-{data?.distance} from center</div>
                <div className="hotelHeaderTaxiOffer">Book a stay over Rs {data?.cheapestPrice} at this property and get a free airport taxi</div>
            </div>

            <button className="hotelHeaderBtn">
                Reserve or book now!
            </button>

        </div>
    )
}

export default HotelHeader