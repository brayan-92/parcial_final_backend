import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, idNumber, email, role } = req.body;
  if (!firstName || !lastName || !idNumber || !email || !role) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const roleExists = await Role.findById(role);
  if (!roleExists) return res.status(400).json({ error: 'Rol no existe' });

  const user = new User({ firstName, lastName, idNumber, email, role });
  await user.save();
  res.json(user);
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find().populate('role', 'name');
  res.json(users);
};
