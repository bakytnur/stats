import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from 'src/countries/country.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  findOne(id: number): Promise<Country | null> {
    return this.countryRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.countryRepository.delete(id);
  }

  async createMany(countries: Country[]) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const country of countries) {
        await queryRunner.manager.save(country);
      }

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
