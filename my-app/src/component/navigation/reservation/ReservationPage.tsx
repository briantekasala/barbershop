import * as React from "react";
import { useState } from "react";
import { OnClickContext } from "../../context/OnClickContext";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";

function Reservation() {
  const [onClick, setOnClick] = useState<boolean>(true);

  // number of reservation
  const [totalReservation, setTotalReservation] = useState([]);

  //user reservation selection
  const [selection, setSelection] = useState({
    person: {
      name: null,
      id: null,
    },
    date: new Date(),
    time: null,
    location: "",
  });

  // user's reservation details
  const [reservation, setReservation] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // potential location
  const [location] = useState(["Home", "Displacement"]);

  // available time
  const [weekTimes] = useState(["18h", "19h30", "20h30", "21h30", "22h30"]);
  const [weekendTimes] = useState([
    "16h",
    "17h",
    "18h",
    "19h",
    "20h",
    "21h",
    "22h",
  ]);

  // basic validation
  const [reservationValidation, setReservationValidatin] = useState(false);

  const getDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = `${months[selection.date.getMonth()]} ${selection.date.getDate()} ${selection.date.getFullYear}`;
    let time:any = selection.time;
    console.log(time);

    const dateTime = new Date(date + ""+ time);
    return dateTime;
  };

  const getEmptyReservation = () => {
    let reservations = totalReservation.filter((reservation:any)=> reservation.isAvailable);
    return reservations.length;
  }



  return (
    <div>
      <OnClickContext.Provider value={{ onClick, setOnClick }}>
        <NavigationMenu />
        <PageTitle title="Reservation" />
      </OnClickContext.Provider>
    </div>
  );
}

export default Reservation;
