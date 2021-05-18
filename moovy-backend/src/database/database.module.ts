import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/database/user.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        port: 5432,
        host: 'localhost',
        username: 'postgres',
        password: '123',
        database: 'users',
        entities: [UserEntity],
        synchronize: true
      })]
})
export class DatabaseModule {}
