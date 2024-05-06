import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateReasonLidDto {
  @Field()
  reason_lid?: string;
}
