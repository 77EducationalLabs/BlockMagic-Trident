import { IsNumber, IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {
    @IsNumber()
    userId: number;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    lastName: string;

    @IsEmail()
    @MaxLength(255)
    email: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    walletId?: string;

    @IsString()
    @MinLength(6)
    @MaxLength(255)
    password: string;
}
