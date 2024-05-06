import { Module } from '@nestjs/common';
import { StuffRoleService } from './stuff_role.service';
import { StuffRoleController } from './stuff_role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuffRole } from './entities/stuff_role.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StuffRole])],
  controllers: [StuffRoleController],
  providers: [StuffRoleService],
})
export class StuffRoleModule {}
