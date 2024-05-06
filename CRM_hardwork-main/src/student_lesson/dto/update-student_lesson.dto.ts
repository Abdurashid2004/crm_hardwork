import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentLessonDto } from './create-student_lesson.dto';

export class UpdateStudentLessonDto extends PartialType(CreateStudentLessonDto) {}
