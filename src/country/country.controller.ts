import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from 'src/countries/country.entity';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get(':id')
  getCountry(@Param('id') id: number): Promise<Country | null> {
    return this.countryService.findOne(id);
  }
}
