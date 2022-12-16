import { useRefEffect } from "@fluentui/react-hooks";
import React, { useEffect, useState } from "react";
import { ReservationService } from "../../../services/ReservationService";
import { UserService } from "../../../services/UserService";
import { OnClickContext } from "../../context/OnClickContext";
import Footer from "../../footer/Footer";
import { NavigationMenu } from "../NavigationMenu";
import PageTitle from "../PageTitle";
import LoginMenu from "./LoginMenu";
import Note from "./Note";
import PlanningAsker from "./PlannigAsker";

function Login() {
  const api: string = "http://localhost:3005";
  const [onClick, setOnClick] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [reservationData, setReservationData] = useState<any>([]);
  const [workingDays, setWorkingDays] = useState<string[]>([]);
  const userService = new UserService(api);

  useEffect(() => {
    const reservation = new ReservationService(api);
    const daysInAWeek: string[] = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    daysInAWeek.forEach(async (day) => {
      let data = await reservation.getReservation(day);
      let userWorkingDays = [];
      let uniqueDays: string[] = [];
      if (data.length > 0) {
        setReservationData(data);
        userWorkingDays.push(day);
        const uniqueWorkDays = userWorkingDays.filter((days) => {
          const isDuplicate = uniqueDays.includes(days);
          if (!isDuplicate) {
            uniqueDays.push(day);

            return true;
          }
          return false;
        });

        console.log(uniqueWorkDays);
        setWorkingDays((w: any) => {
          return [...w, day];
        });
      }

      // het doet dubbel ???
    });
  }, []);
  console.log(reservationData);
  console.log(workingDays);
  return (
    <OnClickContext.Provider value={{ onClick, setOnClick }}>
      <NavigationMenu />
      <PageTitle title="login" />
      {isLoggedIn ? (
        <>
          <div className="planningSchema">
            <PlanningAsker />
            <div className="planningList">
              {workingDays.map((day) => {
                return <Note day={day} />;
              })}
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <LoginMenu setIsLoggedIn={setIsLoggedIn} userService={userService} />
      )}
    </OnClickContext.Provider>
  );
}

export default Login;
