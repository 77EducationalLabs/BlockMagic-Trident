import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { GameService } from './game.service'; 
import { GameDto } from './game.dto';

// @UseGuards(AuthGuard)
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {} 
  
  @Get()
  getAllGames() {
    return this.gameService.getAllGames();
  }

  @Get(':id')
  getGameById(@Param('id') id: string) {
    return this.gameService.getGameById(id);
  }

  @Post()
  createGame(@Body() gameData: GameDto) {
    console.log(gameData);
    return this.gameService.createGame(gameData);
  }

  @Put(':id')
  updateGame(@Param('id') id: string, @Body() gameData: GameDto) {
    return this.gameService.updateGame(id, gameData);
  }

  @Delete(':id')
  deleteGame(@Param('id') id: string) {
    return this.gameService.deleteGame(id);
  }
}
