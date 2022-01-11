import { Controller, Get } from '@nestjs/common';
import { Animal } from './animal/entities/animal.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  testAnimal(): string {
    let testAnimal = new Animal();
    return '';
  }
}
