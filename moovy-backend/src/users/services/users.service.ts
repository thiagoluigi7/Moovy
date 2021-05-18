import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../database/user.entity';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity) 
        private userRepository: Repository<UserEntity>
    ) {}

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findById(id: string): Promise<UserEntity> {
        return await this.userRepository.findOne(id);
    }

    async create(user: CreateUserDto): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    async update(id: string, user: UpdateUserDto): Promise<UserEntity> {
        const oldUser = await this.userRepository.findOne(id);
        if (oldUser != undefined) {
            this.userRepository.merge(oldUser, user);
            return await this.userRepository.save(oldUser);
        } else {
            // Erro
        }
    }

    async delete(id: string) {
        await this.userRepository.delete(id);
    }
}
