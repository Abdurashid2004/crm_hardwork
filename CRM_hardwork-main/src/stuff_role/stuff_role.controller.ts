import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuffRoleService } from './stuff_role.service';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';

@Controller('stuff-role')
export class StuffRoleController {
  constructor(private readonly stuffRoleService: StuffRoleService) {}

  @Post()
  create(@Body() createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRoleService.create(createStuffRoleDto);
  }

  @Get()
  findAll() {
    return this.stuffRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuffRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuffRoleDto: UpdateStuffRoleDto) {
    return this.stuffRoleService.update(+id, updateStuffRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuffRoleService.remove(+id);
  }
}
