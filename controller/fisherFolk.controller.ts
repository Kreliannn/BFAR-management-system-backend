import { Request, Response } from 'express';
import { FisherFolk } from '../services/fisherFolk.service';
import { Notification } from '../services/notification.service';
import { request } from 'http';
import { getRemainingDays, checkIfExpired } from '../utils/functions';
import { getFisherfolkInterface } from '../types/fisherFolk.type';
import { getGearInterface } from '../types/gear.type';
import { getBoatInterface } from '../types/boat.type';

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
      const fisherFolk  = await FisherFolk.getById(req.params.id);
      
      (fisherFolk?.gears as unknown as getGearInterface[])?.forEach(async (gear) => {

          if(getRemainingDays(gear.expiryDate.toString()) <= 30){
            if(await Notification.checkIfExist(gear._id.toString(), "warning", gear.expiryDate.toString())){
              await Notification.create({
                fisherFolk : req.params.id,
                message: "Your  permit is approaching its expiration date. Please renew it to avoid any interruptions.",
                date : "blank",
                time : "blank",
                itemName : gear.name,
                type : "warning",
                itemiD : gear._id,
                expirationDate : gear.expiryDate.toString(),
              })
            } 
        }


        if(checkIfExpired(gear.expiryDate.toString())){
            if(await Notification.checkIfExist(gear._id.toString(), "expired", gear.expiryDate.toString())){
              await Notification.create({
                fisherFolk : req.params.id,
                message: "Your License registration has expired.",
                date : "blank",
                time : "blank",
                itemName : gear.name,
                type : "expired",
                itemiD : gear._id,
                expirationDate : gear.expiryDate.toString(),
              })
            }
        } 
      }); 


      (fisherFolk?.boats as unknown as getBoatInterface[])?.forEach(async (boat) => {

          if(getRemainingDays(boat.expiryDate.toString()) <= 30){
            if(await Notification.checkIfExist(boat._id.toString(), "warning", boat.expiryDate.toString())){
              await Notification.create({
                fisherFolk : req.params.id,
                message: "Your  permit is approaching its expiration date. Please renew it to avoid any interruptions.",
                date : "blank",
                time : "blank",
                itemName : boat.name,
                type : "warning",
                itemiD : boat._id,
                expirationDate : boat.expiryDate.toString(),
              })
            } 
        }


        if(checkIfExpired(boat.expiryDate.toString())){
            if(await Notification.checkIfExist(boat._id.toString(), "expired", boat.expiryDate.toString())){
              await Notification.create({
                fisherFolk : req.params.id,
                message: "Your License registration has expired.",
                date : "blank",
                time : "blank",
                itemName : boat.name,
                type : "expired",
                itemiD : boat._id,
                expirationDate : boat.expiryDate.toString(),
              })
            }
        } 
      }); 
     
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


  static async auth(request: Request, response: Response) {
    try {
      const {email, password} = request.body
      const fisherFolk = await FisherFolk.login(email, password)
      if(fisherFolk){
        response.send(fisherFolk)
      } else {
        response.status(500).send("not found")
      }
    } catch (error: any) {
      response.status(400).json({ message: error.message });
    }
  }
}


/*


      (fisherFolk?.boats as unknown as getBoatInterface[])?.forEach(async (boat) => {
          if(await Notification.checkIfExist(boat._id, "warning", boat.expiryDate.toString())){
            if(getRemainingDays(boat.expiryDate.toString()) <= 30 ){
              await Notification.create({
                fisherFolk : req.params.id,
                message: "your license will be expired soon",
                date : "blank",
                time : "blank",
                itemName : boat.name,
                type : "warning",
                itemiD : boat._id,
                expirationDate : boat.expiryDate.toString(),
            })
          }

          if(await Notification.checkIfExist(boat._id, "expired", boat.expiryDate.toString())){
            if(checkIfExpired(boat.expiryDate.toString())){
              await Notification.create({
                  fisherFolk : req.params.id,
                  message: "your license is expired",
                  date : "blank",
                  time : "blank",
                  itemName : boat.name,
                  type : "expired",
                  itemiD : boat._id,
                  expirationDate : boat.expiryDate.toString(),
              })
            }
          }

        }
      }); 

*/
