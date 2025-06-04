import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String }
});

export const Role = mongoose.model('Role', RoleSchema);
