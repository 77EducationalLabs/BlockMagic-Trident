import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ScoreDto } from './score.dto';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Get()
  getAllUsers() {
    return this.scoreService.getAllScores();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.scoreService.getScoreById(id);
  }

  @Get('/name/:name')
  getUserByName(@Param('name') name: string) {
    return this.scoreService.getScoreByName(name);
  }

  @Post()
  createScore(@Body() scoreData: ScoreDto) {
      return this.scoreService.createScore(scoreData);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() scoreData: any) {
    return this.scoreService.updateScore(id, scoreData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.scoreService.deleteScore(id);
  }
}
