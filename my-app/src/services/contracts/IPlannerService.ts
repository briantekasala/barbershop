export interface IPlannerService {
  makePlanning(day:string,hours:string[]):Promise<void>;
}
