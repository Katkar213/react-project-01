

import { Store } from "../ContextApi/ContextApi";
import { useContext } from "react";
import { useParams } from "react-router-dom";


function Detailpage(){

    const [received] = useContext(Store);
    const {id}=useParams();
    
    console.log(id);

  
 
    return(

        <>
      {received.filter((item)=>item.id==id)
      .map((item,index)=>{
        return(
            <div key={index}>
        
              <p>{item.Title}</p> 
              <img
                      id="leftsideimage"
                      src={item.image}
                      alt="not found"
                      height="100px"
                      width="160px"
                    />
             
        </div>
        )
        
      })}
     
        </>
    )
}
export default Detailpage