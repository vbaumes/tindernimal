import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@ApiTags('animal')
@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Animal,
  })
  create(@Body() CreateAnimalDto: CreateAnimalDto) {
    return this.animalService.create(CreateAnimalDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Records found',
    type: Animal,
  })
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Record found',
    type: Animal,
  })
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Animal modified',
    type: Animal,
  })
  update(@Param('id') id: string, @Body() UpdateAnimalDto: UpdateAnimalDto) {
    return this.animalService.update(+id, UpdateAnimalDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Animal deleted',
    type: Animal,
  })
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }
}
