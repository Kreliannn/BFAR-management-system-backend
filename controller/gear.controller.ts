import { Request, Response } from 'express';
import { Gear } from '../services/gear.service';
import { FisherFolk } from '../services/fisherFolk.service';

export class GearController {
  static async create(req: Request, res: Response) {
    try {
      const gear = await Gear.create(req.body);
      await FisherFolk.insertGear(gear.owner.toString() ,gear._id.toString())
      res.status(201).json(gear);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const gears = await Gear.getAll();
      res.status(200).json(gears);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const gear = await Gear.getById(req.params.id);
      res.send(gear);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const gear = await Gear.update(req.params.id, req.body);
      res.send(gear);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await Gear.delete(req.params.id);
      res.status(200).json({ message: 'Gear deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
