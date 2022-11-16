import { IUser } from "../models/IUser";
import { IUserService } from "./contracts/IUserService";

export class UserService implements IUserService {
  url: string;

  constructor(apiUrl: string) {
    this.url = apiUrl;
  }
  async getUser(name?: string): Promise<IUser[]> {
    try {
      const user = await fetch(`${this.url}/getUSer?Name=${name}`, {
        method: "GET",
      });
      if (!user.ok) {
        throw new Error(await user.text());
      }

      const userResult: IUser[] = await user.json();

      return userResult;
    } catch (error: any) {
      throw new Error(error);
      
    }
  }
}
