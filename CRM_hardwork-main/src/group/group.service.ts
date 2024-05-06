import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(@InjectRepository(Group) private groupRepo:Repository<Group>){}


  create(createGroupDto: CreateGroupDto) {
    return this.groupRepo.save(createGroupDto)
  }

  findAll() {
    return this.groupRepo.find(
      {relations:
      {branch_id:true,group_stage_id:true,
        groupStuffs:true,lessons:true,studentGroup:true}
      }
    )
  }

  findOne(id: number) {
    return this.groupRepo.findOneBy({id})
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    await this.groupRepo.update({id},updateGroupDto)
    return this.findOne(id)
  }

 async remove(id: number) {
  await this.groupRepo.delete({id})
    return id
  }
}
