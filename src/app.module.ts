import { Module } from '@nestjs/common';
import { PopulationModule } from './population/population.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './countries/country.entity';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    PopulationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'local_mysql',
      port: 3306,
      username: 'myuser',
      password: 'mypassword',
      database: 'stats',
      entities: [Country],
      synchronize: true,
    }),
    CountryModule,
  ],
})
export class AppModule {}
