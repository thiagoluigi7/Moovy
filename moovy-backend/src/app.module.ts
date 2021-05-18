import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ProfilesController } from './users/controllers/profiles.controller';
import { ProfilesService } from './users/services/profiles.service';

@Module({
  imports: [
    UsersModule,
    DatabaseModule
  ],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
