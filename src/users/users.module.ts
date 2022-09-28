import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resovler";
import { UsersService } from "./users.service";
import { UsersProviders } from "./users.providers";
import { DatabaseModule } from "../database.module";

@Module({
  imports: [DatabaseModule],
  providers: [UsersResolver, UsersService, ...UsersProviders],
  exports: [UsersService]
})
export class UsersModule {
}
