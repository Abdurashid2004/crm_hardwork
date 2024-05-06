import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Student } from 'src/students/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Payment {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  // @Field(() => Student)
  // @ManyToOne(() => Student, (data) => data.payments)
  // student_id: Student;

  @Field()
  @Column()
  payment_last_date: Date;

  @Field()
  @Column()
  payment_date: Date;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  is_paid: boolean;

  @Field()
  @Column()
  total_payment: number;
}
