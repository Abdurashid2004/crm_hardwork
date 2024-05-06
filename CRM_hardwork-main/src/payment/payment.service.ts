import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payment) private paymentRepo:Repository<Payment>){}

  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentRepo.save(createPaymentDto)
  }

  findAll() {
    return this.paymentRepo.find()
  }

  findOne(id: number) {
    return this.paymentRepo.findOneBy({id})
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    await this.paymentRepo.update({id},updatePaymentDto)
    return this.findOne(id)
  }

 async  remove(id: number) {
  await this.paymentRepo.delete({id})
    return id
  }
}
