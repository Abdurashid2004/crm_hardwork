import { Module } from '@nestjs/common';
import { LidService } from './lid.service';
import { LidController } from './lid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { LidResolver } from './lid.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Lid])],
  controllers: [LidController],
  providers: [LidService, LidResolver],
})
export class LidModule {}
