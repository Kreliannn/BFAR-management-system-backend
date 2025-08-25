import { Request, response, Response } from 'express';
import { Report } from '../services/report.service';

export class ReportController {

  static async create(req: Request, res: Response) {
        const report = req.body
        await Report.create(report)
        res.send("sucess")
  }

  static async get(req: Request, res: Response) {
        const reports = await Report.getAll()
        res.send(reports)
  }
}
