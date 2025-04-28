import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('users') // Explicitly set table name to 'users'
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Index({ unique: true }) // Ensure email is unique
  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 255 }) // To store the hashed password
  password: string;

  // Making phone, city, state nullable as they are often optional
  @Column({ type: 'varchar', length: 20, nullable: true })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  state: string;
}