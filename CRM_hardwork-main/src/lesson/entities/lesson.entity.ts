import { Group } from "src/group/entities/group.entity";
import { StudentLesson } from "src/student_lesson/entities/student_lesson.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lesson {
@PrimaryGeneratedColumn()
id:number
@Column()
lesson_theme:string
@Column()
lesson_number:number
@ManyToOne(()=>Group,(data)=>data.lessons)
group_id:Group
@Column()
lesson_date:Date

@OneToMany(()=>StudentLesson,(data)=>data.lesson_id)
studentLessons:StudentLesson[]


}
