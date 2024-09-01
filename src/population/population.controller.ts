import { Controller, Get, Param } from '@nestjs/common';

@Controller('population')
export class PopulationController {
  @Get(':country')
  getPopulaton(@Param('country') country: string): string {
    return 'This action returns all population' + country;
  }
}
