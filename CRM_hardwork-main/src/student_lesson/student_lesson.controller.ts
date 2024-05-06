import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentLessonService } from './student_lesson.service';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';

@Controller('student-lesson')
export class StudentLessonController {
  constructor(private readonly studentLessonService: StudentLessonService) {}

  @Post()
  create(@Body() createStudentLessonDto: CreateStudentLessonDto) {
    return this.studentLessonService.create(createStudentLessonDto);
  }

  @Get()
  findAll() {
    return this.studentLessonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentLessonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentLessonDto: UpdateStudentLessonDto) {
    return this.studentLessonService.update(+id, updateStudentLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentLessonService.remove(+id);
  }
}
