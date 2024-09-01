import { Injectable } from '@nestjs/common';
import { Country } from 'src/entity/country.entity';
import { CountryRepository } from './country.repository';
import { CountryDto } from 'src/dto/country.dto';

@Injectable()
export class CountryService {
  constructor(private countryRepository: CountryRepository) {}

  findAll(): Promise<Country[]> {
    return this.countryRepository.findAll();
  }

  findOne(id: number): Promise<Country | null> {
    return this.countryRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.countryRepository.remove(id);
  }

  async add(country: CountryDto) {
    const entity = new Country();
    entity.name = country.name;
    entity.fullname = country.fullName;
    entity.continentId = country.continent;
    await this.countryRepository.create(entity);
  }

  async update(country: CountryDto) {
    const entity = new Country();
    entity.id = country.id;
    entity.name = country.name;
    entity.fullname = country.fullName;
    entity.continentId = country.continent;
    await this.countryRepository.update(entity);
  }
}
