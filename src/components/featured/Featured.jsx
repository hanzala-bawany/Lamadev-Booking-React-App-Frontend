import React from 'react'
import "./featured.css"

const Featured = () => {
    return (
        <div className="featuredContainer">

            <div className="featuredItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg" alt="dublin" />
                <div className="featuredtitle">
                    <h1 className='titleName'>dublin</h1>
                    <h2 className='titleProperties'>120 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Dolmen_Towers_Karachi.jpg" alt="Karachi" />
                <div className="featuredtitle">
                    <h1 className='titleName'>Karachi</h1>
                    <h2 className='titleProperties'>330 properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/BackBay_skyline.jpg" alt="Mumbai" />
                <div className="featuredtitle">
                    <h1 className='titleName'>Mumbai</h1>
                    <h2 className='titleProperties'>240 properties</h2>
                </div>
            </div>

        </div>
    )
}

export default Featured