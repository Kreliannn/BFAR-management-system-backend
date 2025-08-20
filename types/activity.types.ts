import { getFisherfolkInterface } from "./fisherFolk.type";
import { getBoatInterface } from "./boat.type";

export interface insertActivityInterface {
  fisherfolk: string;   
  boat: string;         
  activityType: string;
  location?: string;
  date: Date;
  time: string;
}


export interface getActivityInterface {
  _id : string,
  fisherfolk: getFisherfolkInterface;   
  boat: getBoatInterface;         
  activityType: string;
  location : string;
  date: Date;
  time: string;
}
