import NotificationDB from "../model/notification.model"


export class Notification {


  static async getByFisherFolk( id : string) {
    return await NotificationDB.find({ fisherFolk : id }).populate('fisherFolk').exec();
  }

}
