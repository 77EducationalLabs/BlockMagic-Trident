import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreController } from './score.controller';
import { ScoreEntity } from 'src/db/entities/score.entity';
import { ScoreService } from './score.service';

@Module({
  controllers: [ScoreController],
  imports: [TypeOrmModule.forFeature([ScoreEntity])],
  exports: [ScoreService],
  providers: [ScoreService]
})
export class ScoreModule {}
