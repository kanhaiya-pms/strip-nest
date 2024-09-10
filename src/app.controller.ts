import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/payment")
  creatPaymentIntance(@Body() payload: any): any {
    if (!payload) {
      throw new BadRequestException("amount is missing")
    }
    return this.appService.creatPaymentIntance(payload.amount)
  }
}
