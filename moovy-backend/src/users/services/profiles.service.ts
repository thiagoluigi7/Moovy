import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/database/user.entity';
import { Repository } from 'typeorm';
import { movieDto } from '../dtos/movie.dto';

@Injectable()
export class ProfilesService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {}

    async getMovies(id: string): Promise<string[]> {
        const user = await this.userRepository.findOne(id);
        return user.movies;
    }

    async addMovies(id: string, body: movieDto): Promise<UserEntity> {
        const oldUser = await this.userRepository.findOne(id);
        oldUser.movies.push(body.movies.toString());
        if (oldUser != undefined) {
            return await this.userRepository.save(oldUser);
        } else {
            // Erro
        }
    }

}
