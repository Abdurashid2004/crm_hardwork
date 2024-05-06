import { PartialType } from '@nestjs/mapped-types';
import { CreateLidStatusDto } from './create-lid_status.dto';
import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class UpdateLidStatusDto extends PartialType(CreateLidStatusDto) {
  @Field()
  status?: string;
}
