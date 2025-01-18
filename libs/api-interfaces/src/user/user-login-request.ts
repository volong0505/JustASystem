import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserLoginRequest {

    @IsString()
    @ApiProperty({
        type: String,
        required: true,
        example: 'admin',
    })
    username!: string

    @IsString()
    @ApiProperty({
        type: String,
        required: true,
        example: 'Password',
    })
    password!: string
}