import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Owner } from './entities/owner.entity';

@ApiTags('owner')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Owner,
  })
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.create(createOwnerDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Records found',
    type: Owner,
  })
  findAll() {
    return this.ownerService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Record found',
    type: Owner,
  })
  findOne(@Param('id') id: string) {
    return this.ownerService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Owner modified',
    type: Owner,
  })
  update(@Param('id') id: string, @Body() updateOwnerDto: UpdateOwnerDto) {
    return this.ownerService.update(+id, updateOwnerDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Owner deleted',
    type: Owner,
  })
  remove(@Param('id') id: string) {
    return this.ownerService.remove(+id);
  }
}
