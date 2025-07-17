import React, { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Header from '../../components/header/Header'
import "./hotelsList.css"
import { useLocation } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range'; // 👈 yeh import sahi hai
import { format } from 'date-fns';
import HListResultItem from '../../components/hListResultItem/HListResultItem'
import useFetch from '../../hooks/useFetch'


const HotelsList = () => {

  const navData = useLocation().state

  const [destination, setDestination] = useState(navData.destination);
  const [option, setOption] = useState(navData.option);
  const [date, setDate] = useState(navData.date);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const [openDate, setOpenDate] = useState(false)

  const { data, loading, error, reFetchData } = useFetch(`http://localhost:8000/hotel?city=${destination}&min=${min}&max=${max}`)
  const dataByDestination = data?.data
  console.log(dataByDestination, "data by destination");

  const searchListHandler = () => {
    reFetchData()
  }


  return (
    <div id='hotelsListPage'>

      <NavBar />

      <Header type="hotelsList" />

      <div className="hotelsListConatiner">
        <div className="hotelsList">

          {/* section 1  */}
            <div className="hotelListSearch">

              <h1 className="searchTitle">Search</h1>

              <div className="destination">
                <p className="destinationHeading">Destination</p>
                <input type="text" onChange={(e) => setDestination(e.target.value)} placeholder={destination} />
              </div>

              <div className="checkInDate">
                <p className="checkInDateHeading">Check-in date</p>
                <span onClick={() => setOpenDate(!openDate)} className="newDate">
                  {format(date[0].startDate, "MM/dd/yyyy")} to  {format(date[0].endDate, "MM/dd/yyyy")}
                </span>
                {
                  openDate && <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                }
              </div>

              <div className="optionItemsConatiner">

                <div>Options</div>

                <div className="optionItems">
                  <div className="optionItem">
                    <span className="optionItemText"> Min Price (per night) </span>
                    <input type="text" placeholder='min' onChange={(e) => setMin(e.target.value)} />
                  </div>

                  <div className="optionItem">
                    <span className="optionItemText"> Max Price (per night) </span>
                    <input type="text" placeholder='max' onChange={(e) => setMax(e.target.value)} />
                  </div>

                  <div className="optionItem">
                    <span className="optionItemText"> Adult </span>
                    <input min="1"
                      onChange={(e) => setOption({ ...option, adult: Math.round(Number(e.target.value)) })}
                      placeholder={option.adult} type="number"
                    />
                  </div>

                  <div className="optionItem">
                    <span className="optionItemText"> Children </span>
                    <input min="0"
                      onChange={(e) => setOption({ ...option, children: Math.round(Number(e.target.value)) })}
                      placeholder={option.children} type="number"
                    />
                  </div>

                  <div className="optionItem">
                    <span className="optionItemText"> Room </span>
                    <input min="1"
                      onChange={(e) => setOption({ ...option, room: Math.round(Number(e.target.value)) })}
                      placeholder={option.room} type="number"
                    />
                  </div>
                </div>

              </div>

              <button onClick={searchListHandler} className="seachListBtn">Search</button>

            </div>

          {/* section 2 */}
          <div className="hotelListResult">

            {
              loading ? <div style={{ alignSelf: "center", marginLeft: "50%" }} className="spinner-border" role="status"> </div> :
                dataByDestination?.map((card) => < HListResultItem key={card?._id} card={card} />)
            }

          </div>

        </div>
      </div>

    </div>
  )
}

export default HotelsList