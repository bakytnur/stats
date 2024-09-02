import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Continent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
