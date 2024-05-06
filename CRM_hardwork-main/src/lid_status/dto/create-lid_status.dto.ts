import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateLidStatusDto {
    @Field()
    status:string
}


