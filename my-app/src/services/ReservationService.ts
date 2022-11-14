import { IReservationService } from "./contracts/IReservationService";

export class ReservationService implements IReservationService {
  url: string;

  constructor(apiUrl: string) {
    this.url = apiUrl;
  }
  async makeReservation(
    name?: string,
    phone?: string,
    date?: Date,
    hour?: string,
    displacementAddress?: string
  ): Promise<void> {
    let data = {
      Name: name,
      Phone: phone,
      Date: date,
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
}
