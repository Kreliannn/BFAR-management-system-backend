import AccountDB from '../model/accounts.model';
import { accountInterface, getAccountInterface } from '../types/account.type';

export class Account {

  static async create(data: accountInterface) {
    const account = new AccountDB(data);
    return await account.save();
  }

  static async getAll() {
    return await AccountDB.find()
  }

  static async getById(id: string) {
    return await AccountDB.findById(id)
  }

  static async update(id: string, data: getAccountInterface) {
    return await AccountDB.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await AccountDB.findByIdAndDelete(id);
  }


}
