import { Lid } from "src/lid/entities/lid.entity";
import { Payment } from "src/payment/entities/payment.entity";
import { StudentGroup } from "src/student_group/entities/student_group.entity";
import { StudentLesson } from "src/student_lesson/entities/student_lesson.entity";
import { Column, Entity,  ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id:number

    // @ManyToOne(()=>Lid,(data)=>data.students)
    // lid_id:Lid
    @Column()
    first_name:string
    @Column()
    last_name:string
    @Column()
    phone_number:string
    @Column()
    bith_date:string
    @Column()
    gender:string
    @OneToMany(()=>StudentGroup,(data)=>data.student_id)
    studentGroups:StudentGroup[]
    @OneToMany(()=>StudentLesson,(data)=>data.student_id)
    studentsLessons:StudentLesson[]
    // @OneToMany(()=>Payment,(data)=>data.student_id)
    // payments:Payment[]

}
