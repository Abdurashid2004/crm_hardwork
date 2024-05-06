import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Lid } from 'src/lid/entities/lid.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Target {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Lid, (lid) => lid.id)
  @Field((type) => [Lid], { nullable: true })
  lids?: Lid[];
}
