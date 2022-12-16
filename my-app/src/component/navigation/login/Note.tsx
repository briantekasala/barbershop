import React from "react";

interface INote {
    reservationPlanning? : any
    day : string;
}

function Note(props:INote) {
  const {day} = props;
  console.log(day);
  return (
    <div className="Note">
      <h4>{day}</h4>
      <ul className="list">
        <li>naam:  , verplaasting :bosuil 79 , Uur: 17h</li>
        <li>naam: owen , verplaasting :bosuil 79 , Uur: 18h</li>
        <li>naam: kris , verplaasting :bosuil 79 , Uur: 19h</li>
        <li>naam: Bart , verplaasting :bosuil 79 , Uur: 20h</li>
        
      </ul>
    </div>
  );
}

export default Note;
