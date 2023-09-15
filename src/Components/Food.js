
import React, { useContext } from "react";
import {Store} from "../ContextApi/ContextApi"
import { useNavigate } from "react-router-dom";


function Food(){
    const [received] = useContext(Store);
    console.log(received);
    const Navi=useNavigate();
   
    return(
        <>
       
        {/* {received.filter((item)=>item.Category==="Food").map((item,index)=>{
      return(
    
        <div key={index} id="mapdata">
        <h1>Name of Food:{item.Title}</h1>
        <img src={item.image} alt=" not found"
        height="300px" width="400px"/>
        <h2>{item.Description}</h2>
      </div>
      )
      
      
    })} */}


          
<div className="maincontainer">
        {/* left side parent */}

        <div id="Lparent1" >
          <h1 className="side side2">Latest Articles</h1>
          {received.filter((item) => item.Category === "Food")

            .map((item, index) => {
              return (
                <div key={index} onClick={()=>Navi("/detailpage")}>
                  <div id="parent2">
                    <img
                      id="leftsideimage"
                      src={item.image}
                      alt="not found"
                      height="100px"
                      width="160px"
                    />
                    <div id="Description3">
                      <h4>{item.Title}</h4>
                      <p>{item.Description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          
        </div>

    <div className="middlecontainerright">
    
        {/* popular right side parent */}
      
        <div className="Rparent1">
          <h1 className="side2">Top Post</h1>
          {received
            .filter(
              (item) => item.id >= 35 && item.id <= 38 && item.Category === "Food"
            )
            .map((item, index) => {
              return (
                <div id="parent2" key={index} >
                  <img
                    src={item.image}
                    alt="not found"
                    height="100px"
                    width="130px"
                  />
                  <div id="Description">
                    <p>{item.Description}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="Advertise2 side2"><h2 className="Adtext2">Advertisement</h2></div>
        <div className="bigimage2">
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/617f7444-525e-4d9d-8cd6-11987e43ce86_1-sixteen_nine.jpg?VersionId=Rj0w2RAz3_O4kUSaNrRJeYcUqYUWrkWV&size=690:388"
            alt="not found"
          ></img>
        </div>
    </div>
    
      </div>

      <h1 className="side2">Latest</h1>
      <div className="middlecontainer">
        {received.filter((item) =>  item.id >= 77 && item.id <= 79 && item.Category === "Home"  )
          .map((item, index) => {
            return (
              <div className="middlecontainerimage" key={index}>
                <img
                  src={item.image}
                  alt="not found"
                  height="200px"
                  width="350px"
                  id="boximg"
                />
                <div id="Description">
                  <p>{item.Description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
    )
}
export default Food