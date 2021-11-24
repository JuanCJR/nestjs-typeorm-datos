import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'varchar', length: 255 })
  user: User;

  products: Product[];
}
