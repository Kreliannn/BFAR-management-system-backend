import { Request, Response } from 'express';
import { Boat } from '../services/boat.service';

export class BoatController {
  static async create(req: Request, res: Response) {
    try {
      const boat = await Boat.create(req.body);
      res.status(201).json(boat);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const boats = await Boat.getAll();
      res.status(200).json(boats);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const boat = await Boat.getById(req.params.id);
      res.send(boat);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const boat = await Boat.update(req.params.id, req.body);
      res.send(boat);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await Boat.delete(req.params.id);
      res.status(200).json({ message: 'Boat deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
