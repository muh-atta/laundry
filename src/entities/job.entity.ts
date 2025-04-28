import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('jobs') // Explicitly name the table
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  location: string;

  @Column({ type: 'datetime' })
  fromDate: Date;

  @Column({ type: 'datetime' })
  toDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  wages: number;
}