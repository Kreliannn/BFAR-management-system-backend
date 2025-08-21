import { getFisherfolkInterface } from "./fisherFolk.type";

export interface insertBoatInterface {
  owner: string;   
  name: string;
  type: string;
  expiryDate: Date;
  status: string;
  objectType: 'boat';
  registerDate: string;
}


export interface getBoatInterface {
  _id : string,
  owner: getFisherfolkInterface;   
  name: string;
  type: string;
  expiryDate: Date;
  status: string;
  objectType: 'boat';
  registerDate: string;
}
