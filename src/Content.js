import React from "react"; 
import "./Content.css"; 
import ReactAnimatedWeather from 'react-animated-weather'; 


export default function Content() {
let contentData = {
    name:"Aberdeen",
    date:"Last updated at: 16:50",
    description:"Clear Sky"
}
   return (
     <div className="Content">
       <h1>{contentData.name}</h1>
       <h2>{contentData.description}</h2>
       <ReactAnimatedWeather
         icon="CLEAR_DAY"
         color="black"
         size={100}
         animate={true}
       />
     </div>
   );
}