import star from "../../images/star.svg";
import clock from "../../images/time.svg";
import location from "../../images/location.svg"

const StoreContainer = ({ storeData }) => {
    return (
      <div className="store_container">
        <div className="store">
          <img className="store_img" src={storeData.imgUrl} alt={storeData.name} />
          <div className="store_name">{storeData.name}</div>
          <div className="info_container">
            <div className="store_star">
              <img className="star_img" src={star} alt="star" />
              <span>{storeData.rating}</span>
            </div>
            <div className="time">
              <img src={clock} alt="clock" />
              <span className="clock">{storeData.hours}</span>
            </div>
            <div className="location">
              <img src={location} alt="location" />
              <span className="point">{storeData.location}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StoreContainer;
  