import { createContext, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faCar, faTaxi, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range'; // 👈 yeh import sahi hai
import { format } from 'date-fns';
// npm i fns  &&  npm i react-date-range   <--  ye donu command bhi run kar ni he 
// ye total 5 staeps hen date range bane ke lie or in ka neche code
import "./Header.css"
import { useNavigate } from 'react-router-dom';
import { searchContext } from '../../context/contextApi';


const Header = ({ type }) => {

  const {dispatch} = useContext(searchContext)

  const [destination,setDestination] = useState()
  
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [option, setOption] = useState(
    {
      adult: 1,
      children: 2,
      room: 1
    }
  );

  const optionBtnsHandler = (optionName, incrDecr) => {

    const newOption = {
      ...option,
      [optionName]: incrDecr === "i" ? option[optionName] + 1 : option[optionName] - 1
    }
    setOption(newOption)

  }

  const nav = useNavigate()
  const searchBarHandler = () =>{
    dispatch({type : "new_search" , payLoad : {city : destination , date , option} })
    localStorage.setItem("searchDate" , JSON.stringify(date) )
    localStorage.setItem("searchOption" , JSON.stringify(option) )
    nav("/hotels",{ state:{destination , option , date} })
  }


  return (
    <div id="headerContainer">
      <div id="header" style={{margin: type ==="hotelsList" ? "20px 0px 45px 0px" : "20px 0px 80px 0px"}} >

        {/*  section 1 */}
        <div id="headerList">

          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>

        </div>

        {type !== "hotelsList" && <>

          {/*  section 2 */}
          <div className="headerOtherWork">

            <h1 className="headerTitle">A life Time of discount ? it's genius.</h1>
            <p className="headerDescr">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore esse explicabo ratione modi, exercitationem illum odio, nam cumque vitae perspiciatis officia reprehenderit corporis cum. Ipsa dolor quis labore.
            </p>
            <button className="headerBtn">sign in / register</button>

          </div>

          {/*  section 3 */}
          <div className="headerSearchContainer">

            {/* sub section 1 */}
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} />
              <input type="text" placeholder='Where are you going ?' className='searchBar' onChange={(e)=> setDestination(e.target.value)} />
            </div>

            {/* sub section 2 */}
            < div className="headerSearchItem">

              <FontAwesomeIcon icon={faCalendar} />
              <span onClick={() => {
                setOpenDate(!openDate)
                setOpenOptions(false)
              }}> {format(date[0].startDate, "MM/dd/yyyy")} to  {format(date[0].endDate, "MM/dd/yyyy")} </span>

              {openDate && <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="dateRangePicker"
                minDate={new Date()}
              />
              }

            </div>

            {/* sub section 3 */}
            <div className="headerSearchItem">

              <FontAwesomeIcon icon={faPerson} />
              <span onClick={() => {
                setOpenDate(false)
                setOpenOptions(!openOptions)
              }}> {option.adult} Adult . {option.children} Children . {option.room} Room</span>

              {openOptions && <div className="allOptionsContainer">

                <div className="option">
                  <span className="optionText">Adult</span>

                  <div className="optionFuncContainer">
                    <button disabled={option.adult == 0} onClick={() => optionBtnsHandler("adult", "d")} className="optionCounterBtn">-</button>
                    <span className="optionNumber">{option.adult}</span>
                    <button onClick={() => optionBtnsHandler("adult", "i")} className="optionCounterBtn">+</button>
                  </div>
                </div>

                <div className="option">
                  <span className="optionText">Children</span>

                  <div className="optionFuncContainer">
                    <button disabled={option.children == 0} onClick={() => optionBtnsHandler("children", "d")} className="optionCounterBtn">-</button>
                    <span className="optionNumber">{option.children}</span>
                    <button onClick={() => optionBtnsHandler("children", "i")} className="optionCounterBtn">+</button>
                  </div>
                </div>

                <div className="option">
                  <span className="optionText">Room</span>

                  <div className="optionFuncContainer">
                    <button disabled={option.room == 0} onClick={() => optionBtnsHandler("room", "d")} className="optionCounterBtn">-</button>
                    <span className="optionNumber">{option.room}</span>
                    <button onClick={() => optionBtnsHandler("room", "i")} className="optionCounterBtn">+</button>
                  </div>
                </div>

              </div>}


            </div>

            {/* sub section 4 */}
            <button className='searchBtn' onClick={searchBarHandler} >Search</button>

          </div>

        </>}

      </div>
    </div >
  )
}

export default Header