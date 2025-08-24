import NotificationDB from "../model/notification.model"
import { notificationInterface } from "../types/notification.type";

export class Notification {

  static async create(data: notificationInterface) {
    const notification = new NotificationDB(data);
    return await notification.save();
  }

  static async getAll() {
    return await NotificationDB.find().populate('fisherFolk').exec();
  }

  static async getByFisherFolk( id : string) {
    return await NotificationDB.find({ fisherFolk : id }).populate('fisherFolk').exec();
  }

  static async checkIfExist( itemiD : string, type : string, expirationDate : string) {
    const notification = await NotificationDB.findOne({itemiD, type, expirationDate})
    console.log((notification) ? false : true)
    console.log(notification)
    return  (notification) ? false : true
  }

}
