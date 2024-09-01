import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { Country } from 'src/entity/country.entity';
import { CountryRepository } from './country.repository';

@Module({
  controllers: [CountryController],
  providers: [CountryService, CountryRepository],
  imports: [TypeOrmModule.forFeature([Country])],
})
export class CountryModule {}
