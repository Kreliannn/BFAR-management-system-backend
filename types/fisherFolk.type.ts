export interface insertFisherfolkInterface {
  fullname: string;
  contact: string;
  email: string;
  gender : string;
  barangay: string;
  address: string;
  boats : string[];
  gears : string[];
}


export interface getFisherfolkInterface {
  _id : string,
  fullname: string;
  contact: string;
  email: string;
  gender : string;
  barangay: string;
  address: string;
  boats : string[];
  gears : string[];
}
