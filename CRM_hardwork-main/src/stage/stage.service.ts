import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StageService {
  constructor(@InjectRepository(Stage) private stageRepo:Repository<Stage>){}

  create(createStageDto: CreateStageDto) {
     return this.stageRepo.save(createStageDto)
  }

  findAll() {
    return this.stageRepo.find()
  }

  findOne(id: number) {
    return this.stageRepo.findOneBy({id})
  }

 async update(id: number, updateStageDto: UpdateStageDto) {
    await this.stageRepo.update({id},updateStageDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.stageRepo.delete({id})
    return id
  }
}
