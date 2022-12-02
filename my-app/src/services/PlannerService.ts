import { IUserPlanning } from "../models/IUserPlanning";
import { IPlannerService } from "./contracts/IPlannerService";

export class PlannerService implements IPlannerService {
  url: string;
  constructor(apiURl: string) {
    this.url = apiURl;
  }
  async makePlanning(day: string, hours: string[]): Promise<void> {
    let data = { day: day, hours: hours };
    try {
      const makePlanning = await fetch(`${this.url}/makeUserPLanning`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!makePlanning.ok) {
        throw new Error(await makePlanning.text());
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getUserPlanning() {
    try {
      const user = await fetch(`${this.url}/getUserPlanning`, {
        method: "GET",
      });
      if (!user.ok) {
        throw new Error(await user.text());
      }

      const userResult: IUserPlanning[] = await user.json();

      return userResult;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
