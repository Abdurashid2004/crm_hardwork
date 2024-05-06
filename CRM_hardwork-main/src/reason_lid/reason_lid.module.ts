import { Module } from '@nestjs/common';
import { ReasonLidService } from './reason_lid.service';
import { ReasonLidController } from './reason_lid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReasonLid } from './entities/reason_lid.entity';
import { ReasonLidResolver } from './reason_lid.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([ReasonLid])],
  controllers: [ReasonLidController],
  providers: [ReasonLidService, ReasonLidResolver],
})
export class ReasonLidModule {}
