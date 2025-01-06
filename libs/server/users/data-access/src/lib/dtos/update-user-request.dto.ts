import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserRequestDto {

    @IsString()
    @MinLength(2)
    @MaxLength(8)
    @ApiProperty()
    readonly username!: string;

    @IsString()
    @MinLength(2)
    @MaxLength(15)
    @ApiProperty()
    readonly password?: string;


    @IsString()
    readonly refreshToken?: string;
}