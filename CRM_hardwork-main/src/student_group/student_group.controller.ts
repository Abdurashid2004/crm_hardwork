import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentGroupService } from './student_group.service';
import { CreateStudentGroupDto } from './dto/create-student_group.dto';
import { UpdateStudentGroupDto } from './dto/update-student_group.dto';

@Controller('student-group')
export class StudentGroupController {
  constructor(private readonly studentGroupService: StudentGroupService) {}

  @Post()
  create(@Body() createStudentGroupDto: CreateStudentGroupDto) {
    return this.studentGroupService.create(createStudentGroupDto);
  }

  @Get()
  findAll() {
    return this.studentGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentGroupDto: UpdateStudentGroupDto) {
    return this.studentGroupService.update(+id, updateStudentGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentGroupService.remove(+id);
  }
}
