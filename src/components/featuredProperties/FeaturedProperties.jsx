import './FeaturedProperties.css'
import useFetch from '../../hooks/useFetch'


const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("http://localhost:8000/hotel?featured=true&limit=4")
    console.log(data?.data, "data by fetured");
    console.log(loading);

    const featuredProperties = data?.data

    return (
        <div className="fpContainer">
            {
                loading ? <div style={{ alignSelf: "center", marginLeft: "50%" }} className="spinner-border" role="status"> </div> :
                    featuredProperties?.map((item) => {
                        return (
                            <div key={item?._id} className="fpItem">

                                <img src={item?.photos?.[0]} alt={item?.name} />
                                <div className="fptitle">
                                    <div className='fpName'>{item?.name}</div>
                                    <div className='fpCity'>{item?.city}</div>
                                    <p className='fpProperties'>starting from Rs {item?.cheapestPrice}</p>
                                    {/* { */}
                                         {/* item?.rating &&  */}
                                        <div className="rating">
                                            <button className='ratingBtn'>{item?.rating || "0"}</button>
                                            <span className="ratingWord">{item?.rating ? "Superb" : "No review yet"}</span>
                                        </div>
                                     {/* }  */}
                                </div>

                            </div>
                        )
                    })
            }
        </div >

    )
}

export default FeaturedProperties