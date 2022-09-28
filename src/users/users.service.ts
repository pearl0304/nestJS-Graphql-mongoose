import { Injectable, Inject } from "@nestjs/common";
import { User, UserInputType } from "../schemas/user.schema";
import { Model } from "mongoose";
import { ApolloError } from "apollo-server-express";

@Injectable()
export class UsersService {
  constructor(
    @Inject("USER_MODEL")
    private readonly userModel: Model<User>
  ) {
  }

  async findAll(): Promise<User[]> {
    try {
      return this.userModel.find().exec();
    } catch (e) {
      throw new ApolloError(e);
    }
  }

  async createUser(user: UserInputType) {
    try {
      // CREATE DATA
      const data = {
        ...user,
        date_crated: new Date()
      };

      const result = await this.userModel.create(data);
      return {
        uid: result._id,
        ...data
      };

    } catch (e) {
      throw new ApolloError(e);
    }
  }
}
