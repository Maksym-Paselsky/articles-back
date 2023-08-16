import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }
}
