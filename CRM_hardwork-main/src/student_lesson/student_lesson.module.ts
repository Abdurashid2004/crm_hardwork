import { Module } from '@nestjs/common';
import { StudentLessonService } from './student_lesson.service';
import { StudentLessonController } from './student_lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentLesson } from './entities/student_lesson.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StudentLesson])],
  controllers: [StudentLessonController],
  providers: [StudentLessonService],
})
export class StudentLessonModule {}
