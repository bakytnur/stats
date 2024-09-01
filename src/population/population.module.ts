import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PopulationController } from './population.controller';
import { PopulationService } from './population.service';
import { Country } from 'src/entity/country.entity';

@Module({
  controllers: [PopulationController],
  providers: [PopulationService],
  exports: [PopulationService],
  imports: [TypeOrmModule.forFeature([Country])],
})
export class PopulationModule {}
