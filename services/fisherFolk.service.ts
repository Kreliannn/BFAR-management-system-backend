import ActivityDB from '../model/activity.model';
import { insertActivityInterface, getActivityInterface } from '../types/activity.types';

export class Activity {
 
  static async create(data: insertActivityInterface) {
    const activity = new ActivityDB(data);
    return await activity.save();
  }

  
  static async getAll() {
    return await ActivityDB.find()
      .populate('fisherfolk')
      .populate('boats')
      .exec();
  }

 
  static async getById(id: string) {
    return await ActivityDB.findById(id)
      .populate('fisherfolk')
      .populate('boats')
      .exec();
  }

 
  static async update(id: string, data: getActivityInterface) {
    return await ActivityDB.findByIdAndUpdate(id, data, { new: true });
  }

 
  static async delete(id: string) {
    return await ActivityDB.findByIdAndDelete(id);
  }
}

