import { IsBoolean, IsDateString, IsOptional, IsString, MaxLength, MinLength, IsUrl } from "class-validator";
import { Type } from 'class-transformer';


export class GameDto {
  @IsString()
  gameId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name: string;

  @IsDateString()
  released: string;

  @IsString()
  @IsOptional()
  @Type(() => Date)
  timeLimit?: Date;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  processName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  developerCompany: string;

  @IsString()
  @IsOptional()
  @Type(() => Date)
  timePlayed?: Date;

  @IsBoolean()
  isBlocked: boolean;

  @IsUrl()
  @IsOptional()
  @MaxLength(255)
  gameImageUrl?: string;
}
