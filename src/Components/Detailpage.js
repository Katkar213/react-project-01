

import { Store } from "../ContextApi/ContextApi";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function Detailpage(){

    const [received] = useContext(Store);
    const {id}=useParams();
    console.log(id)
    // const paramdata=received.filter((item)=>item.id===parseInt(id))
    // console.log(paramdata)
   
    // if(!paramdata){
    //     console.log("data not found")
    // }
    return(

        <>
      {/* {paramdata.map(()=>{
         
})}  */}
     
        </>
    )
}
export default Detailpage