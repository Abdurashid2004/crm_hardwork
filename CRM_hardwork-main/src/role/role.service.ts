import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role) private roleRero:Repository<Role>){}


  create(createRoleDto: CreateRoleDto) {
    return this.roleRero.save(createRoleDto)
  }

  findAll() {
    return this.roleRero.find({relations:{stuffes:true}})
  }

  findOne(id: number) {
    return this.roleRero.findOneBy({id})
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.roleRero.update({id},updateRoleDto)
    return this.findOne(id)
  }
  async remove(id: number) {
    await this.roleRero.delete({id})
    return id
  }
}
