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
    return await FisherFolkDB.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await FisherFolkDB.findByIdAndDelete(id);
  }
}
