import React from 'react'
import "./featured.css"
import useFetch from '../../hooks/useFetch'

const Featured = () => {

    const { data, loading, error } = useFetch("http://localhost:8000/hotel/countByCity?cities=dublin,karachi,mumbai")
    console.log(data?.data, "data by city");
    console.log(loading);



    return (
        <div className="featuredContainer">

            <div className="featuredItem">
                {
                    loading ?
                        <div style={{ alignSelf: "center" }} className="spinner-border" role="status"> </div> :
                        <>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg" alt="dublin" />
                            <div className="featuredtitle">
                                <h1 className='titleName'>dublin</h1>
                                <h2 className='titleProperties'>
                                    {data?.data?.[0] ?? "0"}
                                    <span> {data?.data?.[0] === 1 ? "property" : "properties"} </span>
                                </h2>
                            </div>
                        </>
                }
            </div>

            <div className="featuredItem">
                {
                    loading ?
                        <div style={{ alignSelf: "center" }} className="spinner-border" role="status"> </div> :
                        <>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Dolmen_Towers_Karachi.jpg" alt="Karachi" />
                            <div className="featuredtitle">
                                <h1 className='titleName'>Karachi</h1>
                                <h2 className='titleProperties'>
                                    {data?.data?.[1] ?? "0"}
                                    <span> {data?.data?.[1] === 1 ? "property" : "properties"} </span>
                                </h2>
                            </div>
                        </>
                }
            </div>

            <div className="featuredItem">
                {
                    loading ?
                        <div style={{ alignSelf: "center" }} className="spinner-border" role="status"> </div> :
                        <>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/BackBay_skyline.jpg" alt="Mumbai" />
                            <div className="featuredtitle">
                                <h1 className='titleName'>Mumbai</h1>
                                <h2 className='titleProperties'>
                                    {data?.data?.[2] ?? "0"}
                                    <span> {data?.data?.[2] === 1 ? "property" : "properties"} </span>
                                </h2>
                            </div>
                        </>
                }
            </div>

        </div>
    )
}

export default Featured