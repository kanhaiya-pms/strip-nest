import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';

@Injectable()
export class AppService {
  public constructor(@InjectStripe() private readonly stripeClient: Stripe) {}
  getHello(): string {
    return 'Hello World!';
  }

 async creatPaymentIntance(amount: number) {
  const paymentIntent = await this.stripeClient.paymentIntents.create({
    amount: amount*100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true
    }
  })
   
  return paymentIntent;
 }


}
