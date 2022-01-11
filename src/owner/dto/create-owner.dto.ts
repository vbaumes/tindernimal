import {
  IsString,
  IsInt,
  IsEmail,
  MinLength,
  MaxLength,
  IsArray,
} from 'class-validator';

export class CreateOwnerDto {
  @IsArray()
  readonly roles: string;

  @IsEmail()
  @IsString()
  @MinLength(10)
  readonly email: string;

  @IsString()
  @MinLength(3)
  readonly firstname: string;

  @IsString()
  @MinLength(3)
  readonly lastname: string;

  @IsInt()
  @MinLength(10)
  @MaxLength(10)
  readonly phoneNumber: string;
}
