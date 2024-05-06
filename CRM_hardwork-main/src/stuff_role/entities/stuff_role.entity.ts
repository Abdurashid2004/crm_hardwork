import { Role } from "src/role/entities/role.entity";
import { Stuff } from "src/stuff/entities/stuff.entity";
import {  Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StuffRole {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne((type)=>Role,(data)=>data.stuffes)
    roleId:Role

    @ManyToOne((type)=>Stuff,(data)=>data.first_name)
    stuffId:Stuff
}
