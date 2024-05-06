import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTargetDto {
  @Field({ nullable: true })
  name?: string;
}
