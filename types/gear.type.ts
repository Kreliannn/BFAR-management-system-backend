import { getFisherfolkInterface } from "./fisherFolk.type";

export interface insertGearInterface {
  owner: string;   
  name: string;
  type: string;
  expiryDate: Date;
  status: string;
  objectType: 'gear';
}


export interface getGearInterface {
  _id : string,
  owner: getFisherfolkInterface;   
  name: string;
  type: string;
  expiryDate: Date;
  status: string;
  objectType: 'gear';
}
