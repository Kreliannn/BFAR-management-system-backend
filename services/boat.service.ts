import BoatDB from '../model/boats.model';
import { insertBoatInterface, getBoatInterface } from '../types/boat.type';

export class Boat {
  static async create(data: insertBoatInterface) {
    const boat = new BoatDB(data);
    return await boat.save();
  }

  static async getAll() {
    return await BoatDB.find().populate('owner').exec();
  }

  static async getById(id: string) {
    return await BoatDB.findById(id).populate('owner').exec();
  }

  static async update(id: string, data: getBoatInterface) {
    return await BoatDB.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await BoatDB.findByIdAndDelete(id);
  }

  static async renewLicense(id: string) {
    const boat = await BoatDB.findById(id)
    if(!boat) return
    const today = new Date();
    const threeYearsLater = new Date();
    threeYearsLater.setFullYear(today.getFullYear() + 3)
    boat.registerDate = today.toISOString().split("T")[0]
    boat.expiryDate = threeYearsLater.toISOString().split("T")[0]
    await boat.save()
  }
}
