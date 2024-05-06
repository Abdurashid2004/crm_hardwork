import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LidService } from './lid.service';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { Lid } from './entities/lid.entity';

@Resolver(Lid)
export class LidResolver {
  constructor(private readonly lidService: LidService) {}

  @Mutation(() => Lid)
  async createLid(@Args('createLidDto') createLidDto: CreateLidDto) {
    return this.lidService.create(createLidDto);
  }

  @Query(() => [Lid])
  async lids() {
    return this.lidService.findAll();
  }

  @Query(() => Lid)
  async lid(@Args('id') id: string) {
    return this.lidService.findOne(+id);
  }

  @Mutation(() => Lid)
  async updateLid(
    @Args('id') id: string,
    @Args('updateLidDto') updateLidDto: UpdateLidDto,
  ) {
    return this.lidService.update(+id, updateLidDto);
  }

  @Mutation(() => Lid)
  async removeLid(@Args('id') id: string) {
    return this.lidService.remove(+id);
  }
}
