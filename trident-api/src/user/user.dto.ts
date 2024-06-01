import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {
    @IsString()
    @IsOptional()
    userId?: string;

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
    @MaxLength(255)
    walletId?: string;

    @IsString()
    @MinLength(6)
    @MaxLength(255)
    password: string;
}
