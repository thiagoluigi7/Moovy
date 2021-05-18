import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './database/user.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ProfilesService } from './services/profiles.service';
import { ProfilesController } from './controllers/profiles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController, ProfilesController],
  providers: [UsersService, ProfilesService]
})
export class UsersModule {}
