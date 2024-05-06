import { Module } from '@nestjs/common';
import { TargetService } from './target.service';
import { TargetController } from './target.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from './entities/target.entity';
import { TargetResolver } from './target.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Target])],
  controllers: [TargetController],
  providers: [TargetService, TargetResolver],
})
export class TargetModule {}
