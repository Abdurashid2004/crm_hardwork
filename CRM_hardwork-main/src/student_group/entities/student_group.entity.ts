import { Group } from "src/group/entities/group.entity";
import { Student } from "src/students/entities/student.entity";
import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StudentGroup {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>Student,(data)=>data.studentGroups)
    student_id:Student
    @ManyToOne(()=>Group,(data)=>data.studentGroup)
    group_id:Group
}
