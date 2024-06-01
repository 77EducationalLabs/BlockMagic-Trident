import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() userData: UserDto) {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userData: any) {
    return this.userService.updateUser(id, userData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
