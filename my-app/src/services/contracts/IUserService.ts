import { IUser } from "../../models/IUser";

export interface IUserService {
  getUser(name:string):Promise<IUser[]>
}
