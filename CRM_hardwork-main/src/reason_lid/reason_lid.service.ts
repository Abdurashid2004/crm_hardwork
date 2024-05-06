import { Injectable } from '@nestjs/common';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReasonLidService {

  constructor(@InjectRepository(ReasonLid) private reasonLidRepo :Repository<ReasonLid>){}
  create(createReasonLidDto: CreateReasonLidDto) {
        return this.reasonLidRepo.save(createReasonLidDto)
  }

  findAll() {
    return this.reasonLidRepo.find()
  }

  findOne(id: number) {
    return this.reasonLidRepo.findOneBy({id})
  }

 async  update(id: number, updateReasonLidDto: UpdateReasonLidDto) {
    await this.reasonLidRepo.update({id},updateReasonLidDto)
    return this.findOne(id)
  }

  async remove(id: number) {
   await this.reasonLidRepo.delete({id})  
   return id
  }
}
