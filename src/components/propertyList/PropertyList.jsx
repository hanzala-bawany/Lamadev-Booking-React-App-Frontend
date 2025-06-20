import { useState } from "react"
import "./propertyList.css"
import useFetch from "../../hooks/useFetch"

const PropertyList = () => {

    const { data, loading, error } = useFetch("http://localhost:8000/hotel/countByType?types=hotel,apartment,resort,villa,cabin")
    console.log(data?.data, "data by type");
    console.log(loading);

    const [propertyListImg, setPropertyListImg] = useState([
        {
            imgUrl: "https://th.bing.com/th/id/OIP.-4LBgzw1z6cZyXn7I2rj5wHaE8?rs=1&pid=ImgDetMain"
        },
        {
            imgUrl: "https://thumbs.dreamstime.com/z/new-modern-apartment-buildings-vancouver-bc-architectural-details-modern-apartment-building-sunny-day-new-modern-251126163.jpg"
        },
        {
            imgUrl: "https://th.bing.com/th/id/R.1924d9f08ee02c765d1da03152609450?rik=zc0%2bD%2bmx1nVaVw&riu=http%3a%2f%2fimg2.10bestmedia.com%2fImages%2fPhotos%2f325297%2fEsperanza_54_990x660.jpg&ehk=I3iT5X9RjUOMN50P%2bg5inEi%2fpFYIr1D9aSxBNQlayGQ%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            imgUrl: "https://wallpaperaccess.com/full/1404161.jpg"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.6XVt-ZfFABk-0gi2EGRi_wHaF7?w=1280&h=1024&rs=1&pid=ImgDetMain"
        }
    ])

    return (
        <div className="proListContainer">

            {
                loading ? <div style={{ alignSelf: "center" , marginLeft : "50%" }} className="spinner-border" role="status"> </div> :
                propertyListImg.map((item,i) => {
                return    (
                        <div key={i} className="proListItem">
                            <img src={item.imgUrl} alt={ data?.data?.[i]?.type } />
                            <div className="proListTitle">
                                <h1 className='titleName'>{ `${data?.data?.[i]?.type}s` }</h1>
                                <h2 className='titleProperties'>{ data?.data?.[i]?.count } { data?.data?.[i]?.count <= 1 ? data?.data?.[i]?.type : `${data?.data?.[i]?.type}s` }</h2>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PropertyList