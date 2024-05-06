import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateLidDto {       
    @Field()
    first_name:string
}
