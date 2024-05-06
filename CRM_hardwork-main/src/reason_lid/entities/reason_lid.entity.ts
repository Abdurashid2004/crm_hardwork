// reason-lid.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';


@Entity()
@ObjectType()
export class ReasonLid {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  reason_lid: string;

  // Define the one-to-many relationship if needed
  // @OneToMany(() => Lid, lid => lid.reasonLid)
  // lids: Lid[];
}
