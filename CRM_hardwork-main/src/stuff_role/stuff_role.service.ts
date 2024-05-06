import { Injectable } from '@nestjs/common';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StuffRole } from './entities/stuff_role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StuffRoleService {
  constructor(@InjectRepository(StuffRole) private stuffRoleRepo:Repository<StuffRole>){}

  create(createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRoleRepo.save(createStuffRoleDto)
  }

  findAll() {
    return this.stuffRoleRepo.find({relations:{roleId:true,stuffId:true},select:{id:false}})
  }

  findOne(id: number) {
    return this.stuffRoleRepo.findOneBy({id})
  }

  async update(id: number, updateStuffRoleDto: UpdateStuffRoleDto) {
await this.stuffRoleRepo.update({id},updateStuffRoleDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.stuffRoleRepo.delete({id})
    return id
  }
}
