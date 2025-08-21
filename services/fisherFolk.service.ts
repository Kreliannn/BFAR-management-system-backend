import FisherFolkDB from '../model/fisherFolk.model';
import { insertFisherfolkInterface, getFisherfolkInterface } from '../types/fisherFolk.type';

export class FisherFolk {
  static async create(data: insertFisherfolkInterface) {
    const fisherFolk = new FisherFolkDB(data);
    return await fisherFolk.save();
  }

  static async getAll() {
    return await FisherFolkDB.find().exec();
  }

  static async getById(id: string) {
    return await FisherFolkDB.findById(id).exec();
  }

  static async update(id: string, data: getFisherfolkInterface) {
    return await FisherFolkDB.findByIdAndUpdate(id, { 
       fullname : data.fullname,
       email : data.email, 
       contact : data.contact,
       barangay : data.barangay,
       address : data.address
    }, 
    { new: true });
  }

  static async delete(id: string) {
    return await FisherFolkDB.findByIdAndDelete(id);
  }

  static async insertGear(id: string, gearId: string) {
    return await FisherFolkDB.findByIdAndUpdate(id,   { $push: { gears: gearId } }, { new: true });
  }

  static async insertBoat(id: string, boatId: string) {
    return await FisherFolkDB.findByIdAndUpdate(id,   { $push: { boats: boatId } }, { new: true });
  }
}
