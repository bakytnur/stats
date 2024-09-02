import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Continent } from 'src/entity/continent.entity';

@Injectable()
export class ContinentRepository {
  constructor(
    @InjectRepository(Continent)
    private repository: Repository<Continent>,
  ) {}

  findAll(): Promise<Continent[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Continent | null> {
    return this.repository.findOneBy({ id });
  }
}
