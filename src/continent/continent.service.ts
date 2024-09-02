import { Injectable } from '@nestjs/common';
import { ContinentDto } from '../dto/continent.dto';
import { ContinentRepository } from './continent.repository';
import { plainToInstance } from 'class-transformer';
import { Continent } from 'src/entity/continent.entity';

@Injectable()
export class ContinentService {
  constructor(private continentRepository: ContinentRepository) {}

  mapCountryToDto(country: Continent): ContinentDto {
    return plainToInstance(ContinentDto, country);
  }

  async findOne(id: number): Promise<ContinentDto> {
    const continent = await this.continentRepository.findOne(id);
    return plainToInstance(ContinentDto, continent);
  }
  async findAll(): Promise<ContinentDto[]> {
    const continents = await this.continentRepository.findAll();
    return continents.map((continent) =>
      plainToInstance(ContinentDto, continent),
    );
  }
}
