import { Injectable } from '@nestjs/common';
import { Country } from 'src/entity/country.entity';
import { CountryRepository } from './country.repository';
import { CountryDto } from 'src/dto/country.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CountryService {
  constructor(private countryRepository: CountryRepository) {}

  mapCountryToDto(country: Country): CountryDto {
    return plainToInstance(CountryDto, country);
  }

  async findAll(): Promise<CountryDto[]> {
    const countries = await this.countryRepository.findAll();
    return countries.map((country) => plainToInstance(CountryDto, country));
  }

  async findOne(id: number): Promise<CountryDto | null> {
    const country = await this.countryRepository.findOne(id);
    return this.mapCountryToDto(country);
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
