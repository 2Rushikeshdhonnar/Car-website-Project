import React, {useState} from "react";
// import './style.css';
import cars from "../../data/car/carData";

function Monkey() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            cars
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.model.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.model}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Monkey;