import * as React from "react";
import { useState } from "react";
import { ReservationService } from "../../../services/ReservationService";
import { OnClickContext } from "../../context/OnClickContext";
import Footer from "../../footer/Footer";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";
import MenuTable from "../MenuTable";

function Reservation() {

  React.useEffect(()=> {

  }, [])
  const [onClick, setOnClick] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const Reservation = new ReservationService("http://localhost:3005");

  let inputNameRef = React.useRef(null);
  let inputPhoneRef = React.useRef(null);
  let inputDateRef = React.useRef(null);
  let inputHourRef = React.useRef(null);
  let inputAddressRef = React.useRef(null);

  const submitData = async () => {
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
    } else {
      let name = inputNameRef?.current?.["value"];
      let phone = inputPhoneRef?.current?.["value"];
      let data = inputDateRef?.current?.["value"];
      let hour = inputHourRef?.current?.["value"];
      let address = inputAddressRef?.current?.["value"];
      await Reservation.makeReservation(name, phone, data, hour, address);
    }
  };

  return (
    <div>
      <OnClickContext.Provider value={{ onClick, setOnClick }}>
        <NavigationMenu />
        <PageTitle title="Reservation" />
        {
          onClick? (
            
            <div className="reservationLayout">
                
              <div className="reservationImage">img</div>
          <div className="reservationForm">
            <form>
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
          ):
          (
            <>
            <div className="reservationView">
          <div className="reservationImage">img</div>
          <div className="reservationForm">
            <form>
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
        <div className="menuView">
              <MenuTable />
            </div>
        </>
          )
        }
        <Footer />
      </OnClickContext.Provider>
    </div>
  );
}

export default Reservation;
