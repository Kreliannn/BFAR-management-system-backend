import { Request, Response } from 'express';
import { Activity } from '../services/activity.service';

export class ActivityController {
  static async create(req: Request, res: Response) {
    try {
      const activity = await Activity.create(req.body);
      res.status(201).json(activity);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const activities = await Activity.getAll();
      res.status(200).json(activities);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const activity = await Activity.getById(req.params.id);
      res.send(activity);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const activity = await Activity.update(req.params.id, req.body);
      res.send(activity);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await Activity.delete(req.params.id);
      res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
