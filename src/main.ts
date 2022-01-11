import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Owner API')
    .setDescription('The owner API description')
    .addTag('owner')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/owners', app, document);

  const secondOptions = new DocumentBuilder()
    .setTitle('Animals API')
    .setDescription('The animal API description')
    .addTag('animal')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const animalDocument = SwaggerModule.createDocument(app, secondOptions);
  SwaggerModule.setup('api/animals', app, animalDocument);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
