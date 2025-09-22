import { getFisherfolkInterface } from "./fisherFolk.type";

export interface insertBoatInterface {
  owner: string;   
  name: string;
  type: string;
  expiryDate: string;
  status: string;
  objectType: string;
  registerDate: string;
  serialNumber : string;
  dateAcquired : string;  
}


export interface getBoatInterface {
  _id : string,
  owner: getFisherfolkInterface;   
  name: string;
  type: string;
  expiryDate: string;
  status: string;
  objectType: string;
  registerDate: string;
  serialNumber : string;
  dateAcquired : string;  
}
