import React from "react"; 

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.date.getDay()];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[props.date.getMonth()]; 
    let hours = props.date.getHours(); 
     if (hours < 10) {
       hours = `0${hours}`;
     }
    let minutes = props.date.getMinutes(); 
    if (minutes < 10) {
        minutes = `0${minutes}`; 
    }

  function dateSuffix() {
    let dateNumber = props.date.getDate()
    if (dateNumber === 1 || dateNumber === 21) {
      return `${dateNumber}st`;
    } else {
      if (dateNumber === 3 || dateNumber === 23) {
        return `${dateNumber}rd`;
      } else {
        if (dateNumber === 2 || dateNumber === 22) {
          return `${dateNumber}nd`;
        } else {
          return `${dateNumber}th`;
        }
      }
    }
  }
   
  return <div>{day} {dateSuffix()} {month}, {hours}:{minutes}</div>
}
