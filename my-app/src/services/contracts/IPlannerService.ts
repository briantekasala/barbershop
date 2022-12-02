import { IUserPlanning } from "../../models/IUserPlanning";

export interface IPlannerService {
  makePlanning(day:string,hours:string[]):Promise<void>;
  getUserPlanning():Promise<IUserPlanning[]>;
}
