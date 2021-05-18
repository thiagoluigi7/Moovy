import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '../database/user.entity';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiOkResponse({ description: 'The users were found'})
    @ApiInternalServerErrorResponse({ description: 'Error in the backend'})
    async findAll(): Promise<UserEntity[]> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'The user was found'})
    @ApiInternalServerErrorResponse({ description: 'Error in the backend'})
    async findById(@Param('id') id: string): Promise<UserEntity> {
        return await this.usersService.findById(id);
    }

    @Post()
    @ApiCreatedResponse({ description: 'The user was created successfully'})
    @ApiInternalServerErrorResponse({ description: 'Error in the backend'})
    @ApiBody({ type: CreateUserDto })
    async create(@Body() user: CreateUserDto): Promise<UserEntity> {
        return await this.usersService.create(user);
    }
    
    @Put(':id')
    @ApiOkResponse({ description: 'The user was updated successfuly'})
    @ApiInternalServerErrorResponse({ description: 'Error in the backend'})
    @ApiBody({ type: UpdateUserDto })
    async update(@Param('id') id: string, @Body() user: UpdateUserDto): Promise<UserEntity> {
        return await this.usersService.update(id, user);
    }

    @Delete(':id')
    @ApiOkResponse({ description: 'The user was removed successfuly'})
    @ApiInternalServerErrorResponse({ description: 'Error in the backend'})
    async delete(@Param('id') id: string) {
        await this.usersService.delete(id);
    }

}
