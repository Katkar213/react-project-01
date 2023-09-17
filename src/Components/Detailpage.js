

import { Store } from "../ContextApi/ContextApi";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Detailpage(){

    const [received] = useContext(Store);
    const {id}=useParams();
    const id2=parseInt(id)
    
    console.log(id);

  
 
    return(

        <>
      {received.filter((item)=>item.id===id2)
      .map((item,index)=>{
        return(
            <div key={index}>
        
              <p className="detail-Title">{item.Title}</p> 
              <img className="detail-image"
                      id="leftsideimage"
                      src={item.image}
                      alt="not found"
                      height="100px"
                      width="160px"
                    />
            <div id="icons">
                   <NavLink id="iconlink"><i className="fa-brands fa-square-instagram" to="https://www.instagram.com/"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-linkedin"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-facebook"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-github"></i></NavLink>
            </div> 
            
              <h3 className="detail-Description">Description</h3>
             
              </div>
        )
        
      })}
     
        </>
    )
}
export default Detailpage