import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [AnimalModule, OwnerModule],
})
export class AppModule {}
