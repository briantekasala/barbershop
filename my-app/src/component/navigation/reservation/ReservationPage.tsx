import * as React from "react";
import { useState } from "react";
import { ReservationService } from "../../../services/ReservationService";
import { OnClickContext } from "../../context/OnClickContext";
import Footer from "../../footer/Footer";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";
import MenuTable from "../MenuTable";
import { PlannerService } from "../../../services/PlannerService";
import { IUserPlanning } from "../../../models/IUserPlanning";
import { Dropdown, IDropdownOption } from "@fluentui/react";

function Reservation() {
  let apiURl: string = "http://localhost:3005";
  const [onClick, setOnClick] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [_dayOptions, set_DayOptions] = useState<any>([]);
  const [_hoursOptions, set_HoursOptions] = useState<any>([]);
  const [_weekendHoursOptions, set_WeekendHoursOptions] = useState<any>([]);
  const [selectedDay, setSelectedDay] = React.useState<string>();
  const [selectedHours, setSelectedHours] = React.useState<string>();
  const [enteredName, setEnteredName] = React.useState<string>();
  const [enteredPhoneNumber, setEnteredPhoneNumber] = React.useState<string>();
  const [enteredAddress, setEnteredAddress] = React.useState<string>();
  const Reservation = new ReservationService(apiURl);

  React.useEffect(() => {
    const UserPlanning = new PlannerService(apiURl);
    const dayOptions: IDropdownOption[] = [];
    const hoursOptions: IDropdownOption[] = [];
    const weekendHoursOptions: IDropdownOption[] = [];
    const getUserPlanning = async () => {
      let userPlanning: IUserPlanning[] = await UserPlanning.getUserPlanning();
      userPlanning.map((data: IUserPlanning, index: number) => {
        dayOptions.push({ key: data.day, text: data.day });
        if (data.day === "Monday") {
          data.hours.map((hours) => {
            hoursOptions.push({ key: index, text: hours });
          });
        }
        if (data.day === "Saturday" || data.day === "Sunday") {
          data.hours.map((hours) => {
            weekendHoursOptions.push({ key: index, text: hours });
          });
        }

        set_DayOptions(dayOptions);
        set_HoursOptions(hoursOptions);
        set_WeekendHoursOptions(weekendHoursOptions);
      });
    };
    getUserPlanning();
  }, [apiURl]);
  console.log(_dayOptions);
  console.log(_hoursOptions);
  console.log(_weekendHoursOptions);

  const submitData = async () => {
    console.log(selectedDay);
    console.log(enteredName);
    if (enteredName === undefined || enteredName === "") {
      alert("Vul u naam in !");
    }
    if (enteredPhoneNumber === "" || enteredPhoneNumber === undefined) {
      alert("Vul u phone nummer in !");
    }
    if (selectedDay === undefined) {
      alert("Geef een dag in !");
    }
    if (selectedHours === undefined) {
      alert("Geef het uur in !");
    } else {
      await Reservation.makeReservation(
        enteredName,
        enteredPhoneNumber,
        selectedDay,
        selectedHours,
        enteredAddress
      );
    }
  };
  const onChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    setEnteredName(event.currentTarget.value);
  };
  const onChangePhoneNumber = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setEnteredPhoneNumber(event.currentTarget.value);
  };
  const onChangeDay = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption<any> | undefined
  ): void => {
    setSelectedDay(item?.text);
  };
  const onChangeHours = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption<any> | undefined
  ): void => {
    setSelectedHours(item?.text);
  };
  const onChangeAddress = (event: React.FormEvent<HTMLInputElement>): void => {
    setEnteredAddress(event.currentTarget.value);
  };
  return (
    <div>
      <OnClickContext.Provider value={{ onClick, setOnClick }}>
        <NavigationMenu />
        <PageTitle title="Reservation" />
        {onClick ? (
          <div className="reservationLayout">
            <div className="reservationImage">img</div>
            <div className="reservationForm">
              <form>
                <h3>Name</h3>
                <input name="name" required={true} onChange={onChangeName} />
                <h3>Phone</h3>
                <input
                  name="phone"
                  required={true}
                  onChange={onChangePhoneNumber}
                />
                <h3>Date</h3>
                <Dropdown
                  placeholder="select day"
                  options={_dayOptions}
                  onChange={onChangeDay}
                />
                {selectedDay === "Saturday" || selectedDay === "Sunday" ? (
                  <>
                    <h3>Hour</h3>
                    <Dropdown
                      placeholder="select hour"
                      options={_weekendHoursOptions}
                      onChange={onChangeHours}
                    />
                  </>
                ) : (
                  <>
                    <h3>Hour</h3>
                    <Dropdown
                      placeholder="select hour"
                      options={_hoursOptions}
                      onChange={onChangeHours}
                    />
                  </>
                )}

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
                      onChange={onChangeAddress}
                    />
                  </>
                )}
                <button onClick={submitData}>Reservation</button>
              </form>
            </div>

            <div className="reservationImage">img</div>
          </div>
        ) : (
          <>
            <div className="reservationView">
              <div className="reservationImage">img</div>
              <div className="reservationForm">
                <form>
                  <h3>Name</h3>
                  <input name="name" required={true} onChange={onChangeName} />
                  <h3>Phone</h3>
                  <input
                    name="phone"
                    required={true}
                    onChange={onChangePhoneNumber}
                  />
                  <h3>Date</h3>
                  <Dropdown
                    placeholder="select day"
                    options={_dayOptions}
                    onChange={onChangeDay}
                  />
                  {selectedDay === "Saturday" || selectedDay === "Sunday" ? (
                    <>
                      <h3>Hour</h3>
                      <Dropdown
                        placeholder="select hour"
                        options={_weekendHoursOptions}
                        onChange={onChangeHours}
                      />
                    </>
                  ) : (
                    <>
                      <h3>Hour</h3>
                      <Dropdown
                        placeholder="select hour"
                        options={_hoursOptions}
                        onChange={onChangeHours}
                      />
                    </>
                  )}
                  {isChecked && (
                    <>
                      <h3>Address</h3>
                      <input
                        name="Address"
                        required={true}
                        onChange={onChangeAddress}
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
        )}
        <Footer />
      </OnClickContext.Provider>
    </div>
  );
}

export default Reservation;
