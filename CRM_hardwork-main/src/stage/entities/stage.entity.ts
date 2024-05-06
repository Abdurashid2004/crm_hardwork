import { Group } from "src/group/entities/group.entity";
import { Lid } from "src/lid/entities/lid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stage {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    // @OneToMany(()=>Lid,(data)=>data.stage_id)
    // stages:Lid[]

    @OneToMany(()=>Group,(data)=>data.group_stage_id)
    group_stages:Group[]
}
