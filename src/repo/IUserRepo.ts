
import  Repo  from "./BaseRepo"
import {User} from "../entities/UserEntity"

export default interface IUserRepo extends Repo<User> {
    getUserById(userId: number):Promise<User[]>;
    createUser(firstName: string, lastName: string,  email: string): Promise<User>;
  }