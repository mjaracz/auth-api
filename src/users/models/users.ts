import { Document } from 'mongoose';

export class Users extends Document {
  readonly _id: string;
  readonly userId: number;
  readonly username: string;
  readonly password: string;
}

// users
// posts
// comments
// photos

// wybor select
// wybor multi select
