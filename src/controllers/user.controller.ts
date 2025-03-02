import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await UserService.createUser(name, email);
  res.status(201).json(user);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserService.getUsers();
  res.json(users);
};
