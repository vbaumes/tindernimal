import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { OwnerModule } from './owner/owner.module';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [AnimalModule, OwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
