import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeModule } from 'nestjs-stripe';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    StripeModule.forRoot({
    apiKey: process.env.API_KEY,
    apiVersion: "2024-06-20",
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
