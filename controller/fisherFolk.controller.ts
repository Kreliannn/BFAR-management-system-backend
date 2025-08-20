import { Request, Response } from 'express';
import { FisherFolk } from '../services/fisherFolk.service';

export class FisherFolkController {
  static async create(req: Request, res: Response) {
    try {
      const fisherFolk = await FisherFolk.create(req.body);
      res.status(201).json(fisherFolk);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const fisherFolks = await FisherFolk.getAll();
      res.status(200).json(fisherFolks);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const fisherFolk = await FisherFolk.getById(req.params.id);
      res.send(fisherFolk);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const fisherFolk = await FisherFolk.update(req.params.id, req.body);
      res.send(fisherFolk);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await FisherFolk.delete(req.params.id);
      res.status(200).json({ message: 'FisherFolk deleted successfully' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
