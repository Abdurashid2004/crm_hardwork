import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePaymentDto {
  @Field()
  student_id: number;

  @Field()
  payment_last_date: Date;

  @Field()
  payment_date: Date;

  @Field()
  price: number;

  @Field()
  is_paid: boolean;

  @Field()
  total_payment: number;
}
