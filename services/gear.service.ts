import GearDB from '../model/gears.model';
import { insertGearInterface, getGearInterface } from '../types/gear.type';

export class Gear {
  static async create(data: insertGearInterface) {
    const gear = new GearDB(data);
    return await gear.save();
  }

  static async getAll() {
    return await GearDB.find().populate('fisherFolk').exec();
  }

  static async getById(id: string) {
    return await GearDB.findById(id).populate('fisherFolk').exec();
  }

  static async update(id: string, data: getGearInterface) {
    return await GearDB.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await GearDB.findByIdAndDelete(id);
  }
}
