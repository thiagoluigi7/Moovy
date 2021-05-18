import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../database/user.entity';
import { movieDto } from '../dtos/movie.dto';
import { ProfilesService } from '../services/profiles.service';

@Controller('profiles')
@ApiTags('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {}

    // Retorna os filmes do usuário (ID) informado
    @Get(':id')
    async findMovies(@Param('id') id: string): Promise<string[]> {
        return await this.profilesService.getMovies(id);
    }

    // Adiciona filmes ao usuário (ID) informado
    @Put(':id')
    @ApiBody({ type: movieDto })
    async addMovie(@Param('id') id: string, @Body() body: movieDto): Promise<UserEntity> {
        return await this.profilesService.addMovies(id, body);
    }

    // Remove filmes do usuário (ID) informado
    // @Put(':id')
    // async deleteMovie(@Param('id') id: string, @Body() body: string): )

    // Adiciona review ao usuário (ID) informado


    // Remove review do usuário (ID) informado

}
