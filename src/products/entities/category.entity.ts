import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;
}
