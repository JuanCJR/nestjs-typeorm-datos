import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Customer {

  @PrimaryGeneratedColumn({type:'int'})
  id: number;
  
  @Column({type:'varchar', length:255})
  name: string;

  @Column({type:'varchar', length:255})
  lastName: string;

  @Column({type:'varchar'})
  phone: string;
}
