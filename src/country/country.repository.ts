import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from 'src/entity/country.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class CountryRepository {
  constructor(
    @InjectRepository(Country)
    private repository: Repository<Country>,
    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Country[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Country | null> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async create(country: Country) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(country);

      await queryRunner.commitTransaction();
    } catch (err) {
      console.error(err);
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }

  async update(country: Country) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(country);

      await queryRunner.commitTransaction();
    } catch (err) {
      console.error(err);
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}
