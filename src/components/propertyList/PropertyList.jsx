import "./propertyList.css"

const PropertyList = () => {
    return (
        <div className="proListContainer">

            <div className="proListItem">
                <img src="https://th.bing.com/th/id/OIP.-4LBgzw1z6cZyXn7I2rj5wHaE8?rs=1&pid=ImgDetMain" alt="dublin" />
                <div className="proListTitle">
                    <h1 className='titleName'>Hotels</h1>
                    <h2 className='titleProperties'>233 hotels</h2>
                </div>
            </div>
            <div className="proListItem">
                <img src="https://thumbs.dreamstime.com/z/new-modern-apartment-buildings-vancouver-bc-architectural-details-modern-apartment-building-sunny-day-new-modern-251126163.jpg" alt="dublin" />
                <div className="proListTitle">
                    <h1 className='titleName'>Apartments</h1>
                    <h2 className='titleProperties'>233 hotels</h2>
                </div>
            </div>

            <div className="proListItem">
                <img src="https://th.bing.com/th/id/R.1924d9f08ee02c765d1da03152609450?rik=zc0%2bD%2bmx1nVaVw&riu=http%3a%2f%2fimg2.10bestmedia.com%2fImages%2fPhotos%2f325297%2fEsperanza_54_990x660.jpg&ehk=I3iT5X9RjUOMN50P%2bg5inEi%2fpFYIr1D9aSxBNQlayGQ%3d&risl=&pid=ImgRaw&r=0" alt="dublin" />
                <div className="proListTitle">
                    <h1 className='titleName'>Resorts</h1>
                    <h2 className='titleProperties'>233 hotels</h2>
                </div>
            </div>

            <div className="proListItem">
                <img src="https://wallpaperaccess.com/full/1404161.jpg" alt="dublin" />
                <div className="proListTitle">
                    <h1 className='titleName'>Villas</h1>
                    <h2 className='titleProperties'>233 hotels</h2>
                </div>
            </div>

            <div className="proListItem">
                <img src="https://th.bing.com/th/id/OIP.6XVt-ZfFABk-0gi2EGRi_wHaF7?w=1280&h=1024&rs=1&pid=ImgDetMain" alt="dublin" />
                <div className="proListTitle">
                    <h1 className='titleName'>Cabins</h1>
                    <h2 className='titleProperties'>233 hotels</h2>
                </div>
            </div>


        </div>
    )
}

export default PropertyList