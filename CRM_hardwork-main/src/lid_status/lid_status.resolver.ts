import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LidStatusService } from './lid_status.service';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { Query, Resolver, Mutation, Args, ID } from '@nestjs/graphql';
import { LidStatus } from './entities/lid_status.entity';

@Resolver()
export class LidStatusResolvers {
  constructor(private readonly lidStatusService: LidStatusService) {}

  @Mutation(() => LidStatus)
  createLidStatus(
    @Args('createLidStatusDto') createLidStatusDto: CreateLidStatusDto,
  ) {
    console.log(createLidStatusDto);

    return this.lidStatusService.create(createLidStatusDto);
  }

  @Query(() => [LidStatus])
  findAllLIdStatus() {
    return this.lidStatusService.findAll();
  }

  @Query(() => LidStatus)
  findOneLidStatus(@Args('id') id: number) {
    return this.lidStatusService.findOne(+id);
  }

  @Mutation(() => LidStatus)
  updateLidStatus(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateLidStatus') updateLidStatusDto: UpdateLidStatusDto,
  ) {
    return this.lidStatusService.update(+id, updateLidStatusDto);
  }


  @Mutation(() => ID)
  removeLidStatus(@Args('id', { type: () => ID }) id: number) {
    return this.lidStatusService.remove(id);
  }
}
