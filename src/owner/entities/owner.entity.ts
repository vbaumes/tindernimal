import { ApiProperty } from '@nestjs/swagger';

enum RoleEnum {
  Admin = 'Admin',
  User = 'User',
}

export class Owner {
  @ApiProperty({ enum: RoleEnum, default: [] })
  roles: RoleEnum[] = [];

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  phoneNumber: number;
}
