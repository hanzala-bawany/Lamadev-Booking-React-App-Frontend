import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react"
import {searchContext} from "../../context/contextApi.jsx"

const Reserve = ({ setOpenReserveSlider , hotelId }) => {

  const [checkedRooms , setCheckedRooms] = useState([])
  const { error, data, loading } = useFetch(`http://localhost:8000/hotel/room/${hotelId}`)

  const handleCheck = (e) =>{
    const checked = e.target.checked
    const value = e.target.value
    setCheckedRooms(checked ? [...checkedRooms , value] : checkedRooms.filter((prevValue) => prevValue !== value)  )
  }

  const {date} = useContext(searchContext )

  const getAllSelectedDates = (start , end) =>{
    
    const startDate = new Date(start)
    const endDate = new Date(end)
    const temDate = new Date(startDate)

    const  dates = []
    console.log(temDate.getDate() , "temDate");
    console.log(endDate.getDate() , "end date" );

    while(temDate.getTime() <= endDate.getTime()){      
      dates.push(new Date(temDate))
      temDate.setDate(temDate.getDate() + 1)
    }
    return dates
    
  }
  console.log(getAllSelectedDates(date[0].startDate || date[0]?.["startDate"] ,date[0].endDate || date[0]?.["endDate"]) , "dates array");
  // console.log(getAllSelectedDates(date[0].startDate , date[0].endDate) , "dates array");
   

  return (
    <div className="reserveBtnModal">
      <div className="roomConatiner">

        <FontAwesomeIcon onClick={() => setOpenReserveSlider(false)} className='closeIcon' icon={faCircleXmark} />

        <span>Slelect you rooms :</span>
        {
          data?.data?.map((rItem) => {
            return <div key={rItem?._id} className="roomInfoConatiner">

              <div className="roomInfo">
                <div className="rTitle">Room Title : {rItem?.title}</div>
                <div className="rTitle">Room Description : {rItem?.descr}</div>
                <div className="rTitle">Max People :
                  <span className="bold">{rItem?.maxPeople} </span>
                </div>
                <div className="rPrice">Room Price {rItem?.price}</div>
              </div>
              {
                rItem?.roomNumbers?.map((rNumberItem) => {
                  return <div key={rNumberItem?._id} className="roomNumberConatiner">
                    <label className="roomNumber">{rNumberItem?.number}</label>
                    <input className="roomCheckBox"  type="checkbox" value={rNumberItem?._id} onChange={handleCheck} />
                  </div>
                })
              }
            </div>
          })
        }

        <button className="roomReserveBtn">  Reserve Now !  </button>

      </div>
    </div>
  )
}

export default Reserve