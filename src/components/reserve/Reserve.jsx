import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react"
import { searchContext } from "../../context/contextApi.jsx"
import styles from "./Reserve.module.css"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Reserve = ({ setOpenReserveSlider, hotelId }) => {

  const navigate = useNavigate()

  const [checkedRooms, setCheckedRooms] = useState([])
  const { error, data, loading } = useFetch(`http://localhost:8000/hotel/room/${hotelId}`)

  const handleCheck = (e) => {
    const checked = e.target.checked
    const value = e.target.value
    setCheckedRooms(checked ? [...checkedRooms, value] : checkedRooms.filter((prevValue) => prevValue !== value))
  }

  const { date } = useContext(searchContext)

  const getAllSelectedDates = (start, end) => {

    const startDate = new Date(start)
    const endDate = new Date(end)
    const temDate = new Date(startDate)

    const dates = []

    while (temDate.getTime() <= endDate.getTime()) {
      dates.push(new Date(temDate).getTime())
      temDate.setDate(temDate.getDate() + 1)
    }
    return dates

  }
  const allDates = getAllSelectedDates(date[0].startDate || date[0]?.["startDate"], date[0].endDate || date[0]?.["endDate"])

  const isRoomAvailable = (roomItem) => {
    const isAvailable = roomItem.unavailableDates.some((date) => allDates.includes( new Date(date).getTime()) )
    console.log(isAvailable , "is Availabke room");
    return !isAvailable
  }

  const finalReserveBtnHandler = async () => {
    try {
      await Promise.all(
        checkedRooms.map((roomId) => {
          console.log(allDates , "all dates");
          const res = axios.patch(`http://localhost:8000/room/availability/${roomId}`, { date: allDates })
          return res.data
        })
      )
      setOpenReserveSlider(false)
      navigate("/")
      toast.success("Rooms reserved successfully")
    }
    catch (error) {
      console.log(error);
      toast.error("Failed to reserve rooms")
    }
  }


  return (
    <div className={styles.reserveBtnModal}>

      <FontAwesomeIcon onClick={() => setOpenReserveSlider(false)} className='closeIcon' icon={faCircleXmark} />

      <div className={styles.roomConatiner}>

        <span className={styles.modalHeading}>Select you rooms :</span>
        {
          data?.data?.map((rItem) => {
            return (
              <div key={rItem?._id} className={styles.roomInfoConatiner}>

                <div className={styles.roomInfo}>
                  <div className={styles.rTitle}> {rItem?.title} </div>
                  <div className={styles.rDesc}> {rItem?.descr} </div>
                  <div className={styles.rMaxPeople} >Max People :
                    <span className={styles.maxPeopleNum}> {rItem?.maxPeople} </span>
                  </div>
                  <div className={styles.rPrice}>Rs. {rItem?.price}</div>
                </div>
                <div className={styles.roomNumbersContainer}>
                  {
                    rItem?.roomNumbers?.map((rNumberItem) => {
                      return (
                        <div key={rNumberItem?._id} className={styles.roomNumberConatiner}>
                          <label className={styles.roomNumber}>{rNumberItem?.number}</label>
                          <input className="roomCheckBox"
                            type="checkbox"
                            value={rNumberItem?._id}
                            onChange={handleCheck}
                            disabled={!isRoomAvailable(rNumberItem)}
                            title={!isRoomAvailable(rNumberItem) && "This room is already booked"}
                            style={{ cursor : !isRoomAvailable(rNumberItem) ? "not-allowed" : "pointer" }}
                          />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }

        <button className={styles.roomReserveBtn} onClick={finalReserveBtnHandler} >  Reserve Now !  </button>

      </div>
    </div>
  )
}

export default Reserve