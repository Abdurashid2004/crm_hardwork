import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateReasonLidDto {
    @Field()
    reason_lid:string
}
