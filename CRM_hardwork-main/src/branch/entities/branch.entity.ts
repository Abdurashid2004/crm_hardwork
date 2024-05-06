import { Group } from "src/group/entities/group.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Branch {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    address:string
    @Column()
    call_number:string


    @OneToMany(()=>Group,(data)=>data.branch_id)
    branches:Group[]
}
