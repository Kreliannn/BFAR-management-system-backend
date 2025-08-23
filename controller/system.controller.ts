import { Request, response, Response } from 'express';
import { Activity } from '../services/activity.service';
import { FisherFolk } from '../services/fisherFolk.service';
import { Boat } from '../services/boat.service';
import { Gear } from '../services/gear.service';

export class SystemController {

  static async getDashboardData(req: Request, res: Response) {
    const fisherfolks = await FisherFolk.getAll()
    const boats = await Boat.getAll()
    const gears = await Gear.getAll()

    fisherfolks.reverse()
    boats.reverse()
    gears.reverse()
    
    const recentFisherFolk = fisherfolks.slice(0, 10);
    const recentBoat = boats.slice(0, 10);
    const recentGear = gears.slice(0, 10);

    res.send({
      fisherfolksCount : fisherfolks.length,
      boatCount : boats.length,
      gearCount : gears.length,
      recentFisherFolk,
      recentBoat,
      recentGear
    })

  }
}
