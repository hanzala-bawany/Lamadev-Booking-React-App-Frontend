import './Hotel.css'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import HotelHeader from '../../components/hotelHeader/HotelHeader'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useContext, useEffect, useState } from 'react'
import { faCircleXmark, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { searchContext } from '../../context/contextApi'
import { authContext } from '../../context/authContextApi'
import Reserve from '../../components/reserve/Reserve'
import { toast } from 'react-toastify';


const Hotel = () => {

  const { date, option } = useContext(searchContext)
  const { user } = useContext(authContext)

  const navigate = useNavigate()

  const roomCount = Number(option?.room ?? option?.["room"] ?? 1)

  const milliSecondsPerDay = 1000 * 60 * 60 * 24

  function daysGiver(startDate, endDate) {
    if (!startDate || !endDate) return 0
    const milliSecondsOfDays = Math.abs(endDate?.getTime() - startDate?.getTime())
    const actualDays = Math.ceil(milliSecondsOfDays / milliSecondsPerDay)
    return actualDays
  }

  const days = daysGiver(
    new Date(date?.[0]?.startDate || date?.[0]?.["startDate"]),
    new Date(date?.[0]?.endDate || date?.[0]?.["endDate"])
  )

  const { id } = useParams() // 1st method to get id from params/path
  console.log(id, "hotel id");

  // const location = useLocation()  //  2nd method to get id from path
  // const id = location.pathname.split("/")[2]

  const { data, loading, error, reFetchData } = useFetch(`http://localhost:8000/hotel/${id}`)
  const dataByHotelId = data?.data
  console.log(dataByHotelId);

  const [openSlider, setOpenSlider] = useState(false)
  const [openReserveSlider, setOpenReserveSlider] = useState(false)
  const [selectImgIndex, setSelectImgIndex] = useState(0)

  const sliderHandler = (i) => {
    setOpenSlider(true)
    setSelectImgIndex(i)
  }

  const sliderMoveHandler = (condition) => {
    let newselectImgIndex;

    if (condition === "d") {
      newselectImgIndex = selectImgIndex == 0 ? 5 : selectImgIndex - 1
    }
    else {
      newselectImgIndex = selectImgIndex == 5 ? 0 : selectImgIndex + 1
    }

    setSelectImgIndex(newselectImgIndex)
  }

  const reserveBtnHandler = () => {
    if (user) {
      setOpenReserveSlider(true)
    }
    else {
      navigate("/login")
      toast.warning("Please! login first");
    }
  }


  return (
    <>
      <NavBar />

      <Header type="hotelsList" />

      <div className="hotelConatiner">

        {
          openSlider &&
          <div className="sliderContainer">
            <FontAwesomeIcon onClick={() => setOpenSlider(false)} className='closeIcon' icon={faCircleXmark} />

            <div className="arrowBtnWraaper leftArrow">
              <FontAwesomeIcon onClick={() => sliderMoveHandler("d")} className='arrowBtn leftArrowIcon' icon={faArrowLeft} />
            </div>

            <div className="sliderImgWrapper">
              <img src={dataByHotelId?.photos?.[selectImgIndex]} alt="" />
            </div>

            <div className="rightArraow arrowBtnWraaper">
              <FontAwesomeIcon onClick={() => sliderMoveHandler("i")} className='arrowBtn rightArrowIcon' icon={faArrowRight} />
            </div>
          </div>
        }

        {
          openReserveSlider && <Reserve setOpenReserveSlider={setOpenReserveSlider} hotelId={id} />
        }

        <HotelHeader reserveBtnHandler={reserveBtnHandler} data={dataByHotelId} />

        <div className="hotelImgesConatiner">
          {
            dataByHotelId?.photos?.map((item, i) => (
              <div onClick={() => sliderHandler(i)} key={dataByHotelId?.photos?.[i]} className="hotelImgeItem">
                <img src={item?.imgUrl} alt="hotel room img" />
              </div>
            ))
          }
        </div>

        <div className="hotelDetailsContent">

          <div className="aboutHotel">
            <h1 className="aboutHotelTitle">{dataByHotelId?.title}</h1>
            <p className="aboutHotelPara">{dataByHotelId?.discr}</p>
          </div>

          <div className="hotelSubDetails">
            <h2 className="hotelSubDetailTitle">Perfect for a {days}-night stay</h2>
            <span className="hotelSubDetailDescr">Located in the real heart of krakow . This property has an axcellent location score of 9.8!</span>
            <h3 className="hotelSubDetailPrise">
              <span>Rs.{days * Number(dataByHotelId?.cheapestPrice) * roomCount}</span> ( {days} night )
            </h3>
            <button className="hotelSubDetailBtn" onClick={reserveBtnHandler} >Reserve or Book Now!</button>
          </div>

        </div>

        <MailList />

        <Footer />

      </div>

    </>
  )
}

export default Hotel