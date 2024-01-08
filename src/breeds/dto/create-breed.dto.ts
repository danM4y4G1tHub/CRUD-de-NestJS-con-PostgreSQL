import { Column, Entity } from 'typeorm';

@Entity()
export class CreateBreedDto {
  @Column({ length: 500 })
  name: string;
}
