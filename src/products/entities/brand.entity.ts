import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar' })
  image: string;

  @OneToMany(
    () => Product,
    (product) => {
      product.brand;
    },
  )
  products: Product[];
}
