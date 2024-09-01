import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from 'src/entity/country.entity';
import { CountryDto } from 'src/dto/country.dto';

@Controller('countries')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get(':id')
  getCountry(@Param('id') id: number): Promise<Country | null> {
    console.log('id', id);
    return this.countryService.findOne(id);
  }

  @Get()
  getAllCountries(): Promise<Country[]> {
    console.log('all countries');
    return this.countryService.findAll();
  }

  @Delete(':id')
  deleteCountry(@Param('id') id: number) {
    return this.countryService.remove(id);
  }

  @Post()
  createCountry(@Body() country: CountryDto) {
    console.log('country', country);
    return this.countryService.add(country);
  }

  @Put()
  updateCountry(@Body() country: CountryDto) {
    console.log('country', country);
    return this.countryService.update(country);
  }
}
