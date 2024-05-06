import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupStuffDto } from './create-group_stuff.dto';

export class UpdateGroupStuffDto extends PartialType(CreateGroupStuffDto) {}
