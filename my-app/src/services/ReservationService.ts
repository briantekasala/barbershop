import { IReservationService } from "./contracts/IReservationService";

export class ReservationService implements IReservationService {
  url: string;

  constructor(apiUrl: string) {
    this.url = apiUrl;
  }
  async makeReservation(
    name?: string,
    phone?: string,
    day?: string,
    hour?: string,
    displacementAddress?: string
  ): Promise<void> {
    let data = {
      Name: name,
      Phone: phone,
      Day: day,
      Hour: hour,
      DisplacementAddress: displacementAddress,
    };

    try {
      const sendReservation = await fetch(`${this.url}/makeReservation`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!sendReservation.ok) {
        throw new Error(await sendReservation.text());
      } else {
        console.log(sendReservation.ok);
      }
    } catch (error) {
      throw new Error();
    }
  }

  async getReservation(day: string): Promise<[]> {
    try {
      const reservationDayList = await fetch(
        `${this.url}/reservationList?Day=${day}`,
        {
          method: "GET",
        }
      );
      if (!reservationDayList.ok) {
        throw new Error(await reservationDayList.text());
      }

      const result = await reservationDayList.json();

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
