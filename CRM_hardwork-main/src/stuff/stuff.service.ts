import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stuff } from './entities/stuff.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { LoginStuffDto } from './dto/logi-stuff.dto';

@Injectable()
export class StuffService {
  constructor(@InjectRepository(Stuff) private stuffRepo:Repository<Stuff>,
private readonly jwtService:JwtService){}

/*********************************getToken******************************************** */
async getTokens(stuff:Stuff) {
  const payload = {
    id: stuff.id,
    is_active: stuff.is_active,
    role:stuff.role
  };

  const [accessToken, refreshToken] = await Promise.all([
    this.jwtService.signAsync(payload, {
      secret: process.env.ACCESS_TOKEN_KEY,
      expiresIn: process.env.ACCESS_TOKEN_TIME,
    }),
    this.jwtService.signAsync(payload, {
      secret: process.env.REFRESH_TOKEN_KEY,
      expiresIn: process.env.REFRESH_TOKEN_TIME,
    }),
  ]);
  return {
    access_token: accessToken,
    refreshToken: refreshToken,
  };
}

/*******************************************Registration************************************************************/

async create(createStuffDto: CreateStuffDto,res: Response) {
const{parol,confirm_parol} = createStuffDto
if(parol!==confirm_parol){
  throw new BadRequestException("Parols do not much")
}
const hashed_parol = await bcrypt.hash(parol,7)
const newStuff = await this.stuffRepo.save({ ...createStuffDto ,hashed_parol })
const tokens = await this.getTokens(newStuff)
const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken,7)

  const updatedStuff = await this.stuffRepo.save({
    ...newStuff,
    hashed_refresh_token: hashed_refresh_token,
  });

  res.cookie('refresh_token', tokens.refreshToken, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  const responce = {
    message: 'Stuff registred',
    stuff: updatedStuff.first_name,
    id:updatedStuff.id,
    role:updatedStuff.role,
    tokens,
  };

 return responce
}
/**********************************************login********************************************************/

async login(loginStuffDto: LoginStuffDto, res: Response) {
  const {   login, parol } = loginStuffDto
  const stuff = await this.stuffRepo.findOne({ where: { login } });

  if (!stuff) {
    throw new BadRequestException('Stuff not found');
  }
  if (!stuff.is_active) {
    throw new BadRequestException('Stuff is not activate');
  }
  const passwordIsMatch = await bcrypt.compare(
    parol,
    stuff.hashed_parol,
  );
  if (!passwordIsMatch) {
    throw new BadRequestException('Password do not match');
  }
  const tokens = await this.getTokens(stuff);
  const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
 
  
  const checkStuff = await this.stuffRepo.findOneBy({id:stuff.id})
  if(!checkStuff){
    throw new BadRequestException('Stuff not Found');
  }
 
  
  const updateStuff = await this.stuffRepo.save(
    { ...checkStuff, hashed_refresh_token:hashed_refresh_token }
     
  );
  res.cookie('refresh_token', tokens.refreshToken, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  const responce = {
    message: 'Stuff logged in',
    stuff: updateStuff.first_name,
    role:updateStuff.role,
    tokens,
  };

  return responce;
}


/*************************************************logout******************************************************/
async logout(refreshToken: string, res: Response) {
  const stuffData = await this.jwtService.verify(refreshToken, {
    secret: process.env.REFRESH_TOKEN_KEY,
  });
  if (!stuffData) {
    throw new ForbiddenException('Stuff not verified');
  }
  const checkStuff = await this.stuffRepo.findOneBy({id:stuffData.id})
  if(!checkStuff){
    throw new BadRequestException('Stuff not Found');
  }
  const updateStuff = await this.stuffRepo.save(
    {...checkStuff,
      hashed_refresh_token: null,
    },
  );
  res.clearCookie('refresh_token');
  const response = {
    message: 'Stuff logged out successfully',
    stuff_hashed_token: updateStuff.hashed_refresh_token,
  };
  return response;
}
/***************************************refreshToken**************************************** */
async refreshToken(stuffId: number, refreshToken: string, res: Response) {
  const decodedToken = await this.jwtService.decode(refreshToken);
  if (stuffId !== decodedToken['id']) {
    throw new BadRequestException('server not found');
  }
  const stuff = await this.stuffRepo.findOne({ where: { id: stuffId } });

  if (!stuff || !stuff.hashed_refresh_token) {
    throw new BadRequestException('stuff not found');
  }
  const tokenMatch = await bcrypt.compare(
    refreshToken,
    stuff.hashed_refresh_token,
  );

  if (!tokenMatch) {
    throw new ForbiddenException('Forbidden');
  }

  const tokens = await this.getTokens(stuff);
  const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);

  const checkStuff = await this.stuffRepo.findOneBy({id:stuff.id})
  if(!checkStuff){
    throw new BadRequestException('Stuff not Found');
  }
  const updateStuff = await this.stuffRepo.save(
    {...checkStuff,
      hashed_refresh_token: hashed_refresh_token,
    },
  );

  res.cookie('refresh_token', tokens.refreshToken, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  const response = {
    message: 'Stuff refreshedToken',
    user: updateStuff.first_name,
    role:updateStuff.role,
    tokens,
  };
  return response;
}
/***************************************************************************************************** */
 
  findAll() {
    return this.stuffRepo.find({relations:{stuffRoles:true,stuffGroup:true}})
  }

  findOne(id: number) {
    return this.stuffRepo.findOneBy({id})
  }

  async update(id: number, updateStuffDto: UpdateStuffDto) {
await this.stuffRepo.update({id},updateStuffDto)
    return this.findOne(id)
  }

 async remove(id: number) {
  await this.stuffRepo.delete({id})
    return id
  }
}
