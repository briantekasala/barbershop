export interface IReservationService {
  makeReservation(
    name: string,
    phone: string,
    date: Date,
    hour: string,
    displacementAddress: string
  ): Promise<void>;
}
