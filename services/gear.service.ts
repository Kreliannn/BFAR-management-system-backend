import GearDB from '../model/gears.model';
import { insertGearInterface, getGearInterface } from '../types/gear.type';

export class Gear {
  static async create(data: insertGearInterface) {
    const gear = new GearDB(data);
    return await gear.save();
  }

  static async getAll() {
    return await GearDB.find().populate('owner').exec();
  }

  static async getById(id: string) {
    return await GearDB.findById(id).populate('owner').exec();
  }

  static async update(id: string, data: getGearInterface) {
    return await GearDB.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await GearDB.findByIdAndDelete(id);
  }

   static async renewLicense(id: string) {
      const gear = await GearDB.findById(id)
      if(!gear) return
      const today = new Date();
      const threeYearsLater = new Date();
      threeYearsLater.setFullYear(today.getFullYear() + 3)
      gear.registerDate = today.toISOString().split("T")[0]
      gear.expiryDate = threeYearsLater.toISOString().split("T")[0]
      await gear.save()
    }
}
