import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentGroupDto } from './create-student_group.dto';

export class UpdateStudentGroupDto extends PartialType(CreateStudentGroupDto) {}
