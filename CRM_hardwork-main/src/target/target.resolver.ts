import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TargetService } from './target.service';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { Target } from './entities/target.entity';

@Resolver(Target)
export class TargetResolver {
  constructor(private readonly targetService: TargetService) {}

  @Mutation(() => Target)
  async createTarget(
    @Args('createTargetDto') createTargetDto: CreateTargetDto,
  ) {
    return this.targetService.create(createTargetDto);
  }

  @Query(() => [Target])
  async targets() {
    return this.targetService.findAll();
  }

  @Query(() => Target)
  async target(@Args('id') id: string) {
    return this.targetService.findOne(+id);
  }

  @Mutation(() => Target)
  async updateTarget(
    @Args('id') id: string,
    @Args('updateTargetDto') updateTargetDto: UpdateTargetDto,
  ) {
    return this.targetService.update(+id, updateTargetDto);
  }

  @Mutation(() => Target)
  async removeTarget(@Args('id') id: string) {
    return this.targetService.remove(+id);
  }
}
