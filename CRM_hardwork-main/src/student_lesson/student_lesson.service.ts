import { Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentLesson } from './entities/student_lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentLessonService {
  constructor(@InjectRepository(StudentLesson) private studentLessonsRepo:Repository<StudentLesson>){}

  create(createStudentLessonDto: CreateStudentLessonDto) {
    return this.studentLessonsRepo.save(createStudentLessonDto)
  }

  findAll() {
    return this.studentLessonsRepo.find({relations:{lesson_id:true,student_id:true}})
  }

  findOne(id: number) {
    return this.studentLessonsRepo.findOneBy({id})
  }

  async update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    await this.studentLessonsRepo.update({id},updateStudentLessonDto)
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.studentLessonsRepo.delete({id})
    return id
  }
}
