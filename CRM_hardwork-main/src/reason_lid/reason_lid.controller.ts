import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';

@Controller('reason-lid')
export class ReasonLidController {
  constructor(private readonly reasonLidService: ReasonLidService) {}

  @Post()
  create(@Body() createReasonLidDto: CreateReasonLidDto) {
    return this.reasonLidService.create(createReasonLidDto);
  }

  @Get()
  findAll() {
    return this.reasonLidService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reasonLidService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReasonLidDto: UpdateReasonLidDto) {
    return this.reasonLidService.update(+id, updateReasonLidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reasonLidService.remove(+id);
  }
}
