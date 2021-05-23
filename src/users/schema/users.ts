import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  userId: Number,
  username: String,
  name: String,
  surname: String,
  password: String,
});
