import { getBoatInterface } from "./boat.type";
import { getGearInterface } from "./gear.type";


export interface insertFisherfolkInterface {
  fullname: string;
  contact: string;
  email: string;
  gender : string;
  barangay: string;
  address: string;
  password : string,
  boats : getBoatInterface[];
  gears : getGearInterface[];
  civilStatus: string,
  personToNotify: string,
  profile : string
}


export interface getFisherfolkInterface {
  _id : string,
  fullname: string;
  contact: string;
  email: string;
  gender : string;
  barangay: string;
  address: string;
  password : string,
  boats : getBoatInterface[];
  gears : getGearInterface[];
  civilStatus: string,
  personToNotify: string,
  profile : string
}
