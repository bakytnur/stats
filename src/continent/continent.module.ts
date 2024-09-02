import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContinentController } from './continent.controller';
import { Continent } from 'src/entity/continent.entity';
import { ContinentRepository } from './continent.repository';
import { ContinentService } from './continent.service';

@Module({
  controllers: [ContinentController],
  providers: [ContinentService, ContinentRepository],
  imports: [TypeOrmModule.forFeature([Continent])],
})
export class ContinentModule {}
