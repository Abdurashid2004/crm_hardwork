import { Group } from "src/group/entities/group.entity"
import { Stuff } from "src/stuff/entities/stuff.entity"
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class GroupStuff {
@PrimaryGeneratedColumn()
id:number

@ManyToOne(()=>Group,(data)=>data.groupStuffs)
    group_id:Group

@ManyToOne(()=>Stuff,(data)=>data.stuffGroup)
    stuff_id:Stuff
}
