import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidService {
  
  constructor(@InjectRepository(Lid) private lidRepo:Repository<Lid>){}

  create(createLidDto:CreateLidDto) {
  return this.lidRepo.save(createLidDto)
  }

  findAll() {
    return this.lidRepo.find({
      relations:{
        // lid_status_id:true,
        // reason_lid_id:true,
        // stage_id:true,
        // target_id:true,
        // students:true

      }
      ,
      // select:{
      //   first_name:true,
      //   lid_status_id:{
      //     status:true
      //   }
      // }
    })
  }

  findOne(id: number) {
    return this.lidRepo.findOneBy({id})
  }

  async update(id: number, updateLidDto: UpdateLidDto) {
    await this.lidRepo.update({id},updateLidDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.lidRepo.delete({id})
    return id
  }
}
