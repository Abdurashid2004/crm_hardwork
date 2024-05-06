import { Lesson } from "src/lesson/entities/lesson.entity";
import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentLesson {
    @PrimaryGeneratedColumn()
    id:number
    @ManyToOne(()=>Lesson,(data)=>data.studentLessons)
    lesson_id:Lesson
    @ManyToOne(()=>Student,(data)=>data.studentsLessons)
    student_id:Student
    @Column()
    is_there:boolean
    @Column()
    reason:string
    @Column()
    be_paid:boolean
}
