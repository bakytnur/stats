import { Controller, Get, Param } from '@nestjs/common';
import { ContinentService } from './continent.service';
import { ContinentDto } from 'src/dto/continent.dto';

@Controller('continents')
export class ContinentController {
  constructor(private countryService: ContinentService) {}

  @Get(':id')
  getCountry(@Param('id') id: number): Promise<ContinentDto | null> {
    console.log('id', id);
    return this.countryService.findOne(id);
  }

  @Get()
  getAllCountries(): Promise<ContinentDto[]> {
    console.log('all continents');
    return this.countryService.findAll();
  }
}
