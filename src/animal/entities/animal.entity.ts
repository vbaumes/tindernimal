import { ApiProperty } from '@nestjs/swagger';

export enum BreedEnum {
  Border = 'Border Collie',
  GSD = 'German Shepard Dog',
}

export enum GenderEnum {
  F = 'Female',
  M = 'Male',
}

export class Animal {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: [BreedEnum], isArray: true })
  breed: BreedEnum[];

  @ApiProperty({ required: false })
  birthdate: Date;

  @ApiProperty()
  purebred: boolean;

  @ApiProperty({ enum: ['female', 'male'] })
  gender: GenderEnum;

  @ApiProperty({ required: false })
  description: string;
}
