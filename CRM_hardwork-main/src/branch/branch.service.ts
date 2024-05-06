import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './entities/branch.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BranchService {
  constructor(@InjectRepository(Branch) private branchRepo:Repository<Branch>){}


  create(createBranchDto: CreateBranchDto) {
        return this.branchRepo.save(createBranchDto)
  }

  findAll() {
    return this.branchRepo.find({relations:{branches:true}})
  }

  findOne(id: number) {
    return this.branchRepo.findOneBy({id})
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    await this.branchRepo.update({id},updateBranchDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.branchRepo.delete({id})
    return id
  }
}
