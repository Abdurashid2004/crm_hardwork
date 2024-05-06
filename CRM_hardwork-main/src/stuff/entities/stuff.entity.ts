import { GroupStuff } from "src/group_stuff/entities/group_stuff.entity";
import { Role } from "src/role/entities/role.entity";
import { StuffRole } from "src/stuff_role/entities/stuff_role.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stuff {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    first_name:string
    @Column()
    last_name:string
    @Column()
    phone_number:string
    @Column()
    login:string

    @Column()
    hashed_parol:string

    @Column({ nullable: true })
    hashed_refresh_token:string

    @Column()
    role:string

    @Column({default:false})
    is_active:boolean

    @OneToMany((type) => StuffRole,(data)=>data.stuffId)
    stuffRoles: StuffRole[]

    @OneToMany(()=>GroupStuff,(data)=>data.stuff_id)
        stuffGroup:GroupStuff[]

    //     @ManyToMany(() => Role)
    // @JoinTable()
    // roles: Role[]
}
