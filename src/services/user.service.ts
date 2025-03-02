import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export class UserService {
    static async createUser(name: string, email: string) {
      const userRepo = AppDataSource.getRepository(User); 
      const newUser = userRepo.create({ name, email });
      await userRepo.save(newUser);
      return newUser;
    }
  
    static async getUsers() {
      const userRepo = AppDataSource.getRepository(User); 
      return await userRepo.find();
    }
  }
  