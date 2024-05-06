import { Injectable } from '@nestjs/common';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Target } from './entities/target.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TargetService {
  constructor(@InjectRepository(Target) private targetRepo:Repository<Target>){}
  create(createTargetDto: CreateTargetDto) {
     return this.targetRepo.save(createTargetDto)
  }

  findAll() {
    return this.targetRepo.find()
  }

  findOne(id: number) {
    return this.targetRepo.findOneBy({id})
  }

  async update(id: number, updateTargetDto: UpdateTargetDto) {
    await this.targetRepo.update({id},updateTargetDto)
    return this.findOne(id)
  }

  async remove(id: number) {
   await this.targetRepo.delete({id})
   return id
  }
}
