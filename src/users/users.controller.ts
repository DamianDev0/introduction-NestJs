import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from './auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(201)
  async createUser(@Body() user: CreateUserDto) {
    const newUser = await this.usersService.create(user);
    return {
      statusCode: 201,
      message: 'User created successfully',
      user: newUser,
    };
  }

  // @Put(':id')
  // updateUser() {
  //   return this.usersService.update();
  // }
  // @Delete(':id')
  // deleteUser() {
  //   return this.usersService.delete();
  // }
  // @Get(':id')
  // getUserById() {
  //   return this.usersService.getUserById();
  // }
}
