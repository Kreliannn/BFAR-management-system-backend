import ReportDB from "../model/report.model"


export class Report {

  static async create(data: { date : string}) {
    const notification = new ReportDB(data);
    return await notification.save();
  }

  static async getAll() {
    return await ReportDB.find();
  }



}
