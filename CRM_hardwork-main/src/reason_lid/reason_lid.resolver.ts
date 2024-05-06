import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReasonLidService } from './reason_lid.service';
import { CreateReasonLidDto } from './dto/create-reason_lid.dto';
import { UpdateReasonLidDto } from './dto/update-reason_lid.dto';
import { ReasonLid } from './entities/reason_lid.entity';

@Resolver(ReasonLid)
export class ReasonLidResolver {
  constructor(private readonly reasonLidService: ReasonLidService) {}

  @Mutation(() => ReasonLid)
  async createReasonLid(
    @Args('createReasonLidDto') createReasonLidDto: CreateReasonLidDto,
  ) {
    return this.reasonLidService.create(createReasonLidDto);
  }

  @Query(() => [ReasonLid])
  async reasonLids() {
    return this.reasonLidService.findAll();
  }

  @Query(() => ReasonLid)
  async reasonLid(@Args('id') id: string) {
    return this.reasonLidService.findOne(+id);
  }

  @Mutation(() => ReasonLid)
  async updateReasonLid(
    @Args('id') id: string,
    @Args('updateReasonLidDto') updateReasonLidDto: UpdateReasonLidDto,
  ) {
    return this.reasonLidService.update(+id, updateReasonLidDto);
  }

  @Mutation(() => ReasonLid)
  async removeReasonLid(@Args('id') id: string) {
    return this.reasonLidService.remove(+id);
  }
}
