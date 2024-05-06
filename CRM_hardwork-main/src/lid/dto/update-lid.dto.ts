import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateLidDto {
  @Field()
  first_name?: string;
}
