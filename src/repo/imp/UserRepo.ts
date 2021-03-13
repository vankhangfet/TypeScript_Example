import {getRepository} from "typeorm";
import {User} from "../../entities/UserEntity";
import IUserRepo from "../../repo/IUserRepo"
export default class UserRepo implements IUserRepo {
  
  exists(t: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(t: User): Promise<any> {
    throw new Error("Method not implemented.");
  }
  save(t: User): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async getUserById(userId: number):Promise<User[]>{
    
    const userRepository = getRepository(User);
    let users =  await userRepository.find({
        where: [
          { id: userId}
        ]
      });
    return users;
  }

  async createUser(firstName: string, lastName: string,  email: string): Promise<User>{
      let user = new User();
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      const userRepository = getRepository(User);
      return await userRepository.save(user);
  }

} 

