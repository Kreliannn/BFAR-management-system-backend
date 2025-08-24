import { Request, response, Response } from 'express';
import { Notification } from '../services/notification.service';

export class NotificationController {

  static async getNotification(req: Request, res: Response) {
    const { id } = req.params
    const notifications = await Notification.getByFisherFolk(id)
    res.send(notifications)
  }
  
}
