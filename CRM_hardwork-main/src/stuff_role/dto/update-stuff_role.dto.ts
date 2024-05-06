import { PartialType } from '@nestjs/mapped-types';
import { CreateStuffRoleDto } from './create-stuff_role.dto';

export class UpdateStuffRoleDto extends PartialType(CreateStuffRoleDto) {}
