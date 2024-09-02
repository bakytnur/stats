import { Module } from '@nestjs/common';
import { PopulationModule } from './population/population.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entity/country.entity';
import { CountryModule } from './country/country.module';
import { ContinentModule } from './continent/continent.module';
import { Continent } from './entity/continent.entity';

@Module({
  imports: [
    PopulationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'myuser',
      password: 'mypassword',
      database: 'stats',
      entities: [Country, Continent],
      synchronize: true,
    }),
    CountryModule,
    ContinentModule,
  ],
})
export class AppModule {}
