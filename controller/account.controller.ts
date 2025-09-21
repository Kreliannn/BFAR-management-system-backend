import { Request, response, Response } from 'express';
import { getAccountInterface, accountInterface } from '../types/account.type';
import { Account } from '../services/account.service';

export class AccountController {

  static async getAccounts(request: Request, response: Response) {
    const accounts = await Account.getAll()
    response.send(accounts)
  }

  static async insertAccount(request: Request, response: Response) {
    const account : accountInterface = request.body.account
    await Account.create(account)
    const accounts = await Account.getAll()
    response.send(accounts)
  }

 
  static async deleteAccount(request: Request, response: Response) {
    const {id} = request.params
    await Account.delete(id)
    const accounts = await Account.getAll()
    response.send(accounts)
  }
}
