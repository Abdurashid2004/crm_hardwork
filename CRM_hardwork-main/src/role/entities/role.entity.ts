import { Stuff } from "src/stuff/entities/stuff.entity";
import { StuffRole } from "src/stuff_role/entities/stuff_role.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @OneToMany((type) => StuffRole,(data)=>data.roleId)
    stuffes: StuffRole[]

    // @ManyToMany(() => Stuff,(data)=>data.roles,{cascade:true})
    // @JoinTable()
    // stuffs: Stuff[]
}
