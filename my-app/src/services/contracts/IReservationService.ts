export interface IReservationService {
  makeReservation(
    name: string,
    phone: string,
    day: string,
    hour: string,
    displacementAddress: string
  ): Promise<void>;
}
