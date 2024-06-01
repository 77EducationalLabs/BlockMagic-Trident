import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class ScoreDto {
    @IsString()
    id: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    gameName: string;

    @IsNumber()
    score: number;

    @IsString()
    data: string;
}
