import './Hotel.css'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import HotelHeader from '../../components/hotelHeader/HotelHeader'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useEffect, useState } from 'react'
import { faCircleXmark, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'


const Hotel = () => {

  const {id} = useParams() // 1st method to get id from params/path
  console.log(id , "hotel id");

  // const location = useLocation()  //  2nd method to get id from path
  // const id = location.pathname.split("/")[2]

  const { data, loading, error, reFetchData } = useFetch(`http://localhost:8000/hotel/${id}`)
  const dataByHotelId = data?.data
  console.log(dataByHotelId);
  


  const [hotelImages, setHotelImages] = useState([
    {
      imgUrl: "https://th.bing.com/th/id/R.f6c627f90caae82e5d68c42b33281ac1?rik=43j0nL7M7luyBA&pid=ImgRaw&r=0"
    },
    {
      imgUrl: "https://th.bing.com/th/id/R.b66e17feff05a2649ea5082c661af527?rik=rs2NCpzZAF%2bwcA&pid=ImgRaw&r=0"
    },
    {
      imgUrl: "https://th.bing.com/th/id/OIP.TbGvCKfdlIVXK0haDj2JRgHaHa?rs=1&pid=ImgDetMain"
    },
    {
      imgUrl: "https://th.bing.com/th/id/R.c27c980547e2122c0c64ed1e4b7c9662?rik=5oJrdM21oqhyIA&pid=ImgRaw&r=0"
    },
    {
      imgUrl: "https://thumbs.dreamstime.com/b/interior-hotel-room-brown-colors-cozy-sofa-stands-opposite-small-living-205385641.jpg"
    }, {
      imgUrl: "https://th.bing.com/th/id/OIP.7wPq9Wx6tmoYreHi8qj7QAHaEJ?o=7rm=3&rs=1&pid=ImgDetMain"
    }
  ])

  const [openSlider, setOpenSlider] = useState(false)
  const [selectImgIndex, setSelectImgIndex] = useState(0)

  const sliderHandler = (i) => {
    setOpenSlider(true)
    setSelectImgIndex(i)
  }

  const sliderMoveHandler = (condition) => {
    let newselectImgIndex;

    if(condition === "d"){
      newselectImgIndex = selectImgIndex == 0 ? 5 :  selectImgIndex - 1 
    }
    else{
      newselectImgIndex = selectImgIndex == 5 ? 0 :  selectImgIndex + 1
    }

    setSelectImgIndex(newselectImgIndex)
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
                <img src={hotelImages[selectImgIndex].imgUrl} alt="" />
              </div>

              <div className="rightArraow arrowBtnWraaper">
                <FontAwesomeIcon onClick={() => sliderMoveHandler("i")} className='arrowBtn rightArrowIcon' icon={faArrowRight} />
              </div>
            </div>
        }

        <HotelHeader />

        <div className="hotelImgesConatiner">
          {
            hotelImages.map((item, i) => (
              <div onClick={() => sliderHandler(i)} key={hotelImages[i].imgUrl} className="hotelImgeItem">
                <img src={item.imgUrl} alt="hotel room img" />
              </div>
            ))
          }
        </div>

        <div className="hotelDetailsContent">

          <div className="aboutHotel">
            <h1 className="aboutHotelTitle">Stay in the heart of krakow</h1>
            <p className="aboutHotelPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nihil repellendus, quisquam commodi labore nobis hic! Vel illo dicta nobis hic, iure magnam maxime vitae iste rem quia nostrum soluta atque, minus ex voluptates natus nemo id a at sapiente? Ratione dignissimos recusandae odit. Quae dolores officiis vitae iste fuga impedit ullam pariatur? Dolor, illum sit?</p>
          </div>

          <div className="hotelSubDetails">
            <h2 className="hotelSubDetailTitle">Perfect for a 9-night stay</h2>
            <span className="hotelSubDetailDescr">Located in the real heart of krakow . This property has an axcellent location score of 9.8!</span>
            <h3 className="hotelSubDetailPrise">
              <span>$945</span> ( 9 night )
            </h3>
            <button className="hotelSubDetailBtn">Reserve or Book Now!</button>
          </div>

        </div>

        <MailList />

        <Footer />

      </div>

    </>
  )
}

export default Hotel