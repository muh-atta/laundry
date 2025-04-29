import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

   // Add this new method
  async findPaginated(page: number = 1, limit: number = 10): Promise<{ data: Job[]; total: number; page: number; totalPages: number }> {
    const skip = (page - 1) * limit;
    
    const [data, total] = await this.jobRepository.findAndCount({
      skip,
      take: limit,
      order: { id: 'DESC' },
    });

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  async findOne(id: number): Promise<Job> {
    const job = await this.jobRepository.findOne({ where: { id } });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  async create(job: Partial<Job>): Promise<Job> {
    const newJob = this.jobRepository.create(job);
    return this.jobRepository.save(newJob);
  }

  async update(id: number, job: Partial<Job>): Promise<Job> {
    await this.findOne(id); // Check if job exists
    await this.jobRepository.update(id, job);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.jobRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
  }
}