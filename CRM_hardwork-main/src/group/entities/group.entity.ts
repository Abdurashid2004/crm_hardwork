import { Branch } from "src/branch/entities/branch.entity";
import { GroupStuff } from "src/group_stuff/entities/group_stuff.entity";
import { Lesson } from "src/lesson/entities/lesson.entity";
import { Stage } from "src/stage/entities/stage.entity";
import { StudentGroup } from "src/student_group/entities/student_group.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    group_name:string
    @Column()
    lesson_start_time:string
    @Column()
    lesson_continuous:string
    @Column()
    lesson_week_day:string

    @ManyToOne(()=>Stage,(data)=>data.group_stages)
    group_stage_id:Stage

    @Column()
    room_number:number
    @Column()
    room_floor:number

    @ManyToOne(()=>Branch,(data)=>data.branches)
    branch_id:Branch

    @Column()
    lessons_quant:number
    @Column()
    is_active:boolean

    @OneToMany(()=>GroupStuff,(data)=>data.group_id)
    groupStuffs:GroupStuff[]
    @OneToMany(()=>Lesson,(data)=>data.group_id)
    lessons:Lesson[]
    @OneToMany(()=>StudentGroup,(data)=>data.group_id)
    studentGroup:StudentGroup[]

}
