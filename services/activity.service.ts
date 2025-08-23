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
      .populate('boat')
      .exec();
  }

  static async getById(id: string) {
    return await ActivityDB.findById(id)
      .populate('fisherfolk')
      .populate('boat')
      .exec();
  }

  static async getManyByUserId(id: string) {
    return await ActivityDB.find({fisherfolk : id})
      .populate('fisherfolk')
      .populate('boat')
      .exec();
  }

  static async update(id: string, data: getActivityInterface) {
    return await ActivityDB.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await ActivityDB.findByIdAndDelete(id);
  }

   static async getMonthlyActivities() {
      const allActivities = await ActivityDB.find().lean();
 
      const grouped = allActivities.reduce((acc: any, activity) => {
        if (!acc[activity.date]) {
          acc[activity.date] = { date: activity.date, activities: 0 };
        }
        acc[activity.date].activities += 1;
        return acc;
      }, {});

      // convert back to array
      const result = Object.values(grouped);

      // sort by date (assuming YYYY-MM-DD format so string sort works)
      result.sort((a: any, b: any) => a.date.localeCompare(b.date));

      // keep only 30 items
      const last30 = result.slice(-30);

      return last30
    }

}
