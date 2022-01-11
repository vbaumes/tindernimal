import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsString,
  MinLength,
} from 'class-validator';
import { GenderEnum, BreedEnum } from '../entities/animal.entity';

export class CreateAnimalDto {
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsEnum(BreedEnum)
  readonly breed: string;

  @IsDate()
  readonly birthdate: string;

  @IsBoolean()
  readonly purebred: string;

  @IsEnum(GenderEnum)
  readonly gender: string;

  @IsString()
  readonly description: string;
}
