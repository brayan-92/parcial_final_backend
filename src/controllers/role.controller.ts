import { Request, Response } from 'express';
import { Role } from '../models/role.model';

export const createRole = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ error: 'Nombre requerido' });
  const role = new Role({ name, description });
  await role.save();
  res.json(role);
};

export const getRoles = async (_req: Request, res: Response) => {
  const roles = await Role.find();
  res.json(roles);
};
