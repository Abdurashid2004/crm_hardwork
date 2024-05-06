import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { Response } from 'express';
import { LoginStuffDto } from './dto/logi-stuff.dto';
import { CookieGetter } from 'src/decorators/cookie-gettor.decorators';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Post("signUp")
  create(@Body() createStuffDto: CreateStuffDto,
  @Res({ passthrough: true }) res: Response) {
    return this.stuffService.create(createStuffDto,res);
  }
  @HttpCode(200)
  @Post('signIn')
  async login(
    @Body() loginStuffDto: LoginStuffDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.stuffService.login(loginStuffDto, res);
  }


  @HttpCode(200)
  @Post('logout')
  async logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.stuffService.logout(refreshToken, res);
  }


  @HttpCode(200)
  @Post(':id/refresh')
  async refresh(
    @Param('id') id: number,
    @CookieGetter('refresh_token')
    refreshToken: string,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.stuffService.refreshToken(+id, refreshToken, res);
  }

  @Get()
  findAll() {
    return this.stuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuffService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuffDto: UpdateStuffDto) {
    return this.stuffService.update(+id, updateStuffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuffService.remove(+id);
  }
}
