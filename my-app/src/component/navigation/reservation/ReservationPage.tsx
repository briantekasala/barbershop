import * as React from "react";
import { useState } from "react";
import { OnClickContext } from "../../context/OnClickContext";
import Footer from "../../footer/Footer";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";

function Reservation() {
  const [onClick, setOnClick] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [reservation, setReservation] = useState<any>({
    name:"",
    phone:"",
    date:"",
    displacementAddress:""
  });

  let inputNameRef = React.useRef(null);
  let inputPhoneRef = React.useRef(null);
  let inputDateRef = React.useRef(null);
  let inputHourRef = React.useRef(null);
  let inputAddressRef = React.useRef(null);

  const submitData = () => {
    if (inputNameRef?.current?.["value"] === "") {
      alert("Vul u naam in !");
    }
    if (inputPhoneRef?.current?.["value"] === "") {
      alert("Vul u phone nummer in !");
    }
    if (inputDateRef?.current?.["value"] === "") {
      alert("Geef de datum in !");
    }
    if (inputHourRef?.current?.["value"] === "") {
      alert("Geef het uur in !");
    }
    else {
      setReservation( (old:any)=> {
       old.name =inputNameRef?.current?.["value"]
        old.phone=inputPhoneRef?.current?.["value"]
        old.date=inputDateRef?.current?.["value"]
        old.displacementAddress=inputAddressRef?.current?.["value"]
      })

      console.log(reservation)
    }
  };

  return (
    <div>
      <OnClickContext.Provider value={{ onClick, setOnClick }}>
        <NavigationMenu />
        <PageTitle title="Reservation" />
        <div className="reservationLayout">
          <div className="reservationImage">img</div>
          <div className="reservationForm">
            <form >
            <h3>Name</h3>
            <input name="name" required={true} ref={inputNameRef} />
            <h3>Phone</h3>
            <input name="phone" required={true} ref={inputPhoneRef} />
            <h3>Date</h3>
            <input
              type={"date"}
              name="date"
              required={true}
              ref={inputDateRef}
            />
            <h3>Hour</h3>
            <input
              type={"time"}
              name="hour"
              required={true}
              ref={inputHourRef}
            />
            <h3>Displacement</h3>
            <input
              type={"checkbox"}
              name="Displacement"
              onChange={() => {
                setIsChecked((prevCheck: any) => !prevCheck);
              }}
            />
            {isChecked && (
              <>
                <h3>Address</h3>
                <input
                  value={"geef adres in "}
                  name="Address"
                  required={true}
                  ref={inputAddressRef}
                />
              </>
            )}
            <button onClick={submitData}>Reservation</button>
            </form>
          </div>
          
          <div className="reservationImage">img</div>
        </div>
        <Footer />
      </OnClickContext.Provider>
    </div>
  );
}

export default Reservation;
