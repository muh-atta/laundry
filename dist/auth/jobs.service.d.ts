import { Repository } from 'typeorm';
import { Job } from '../entities/job.entity';
export declare class JobsService {
    private jobsRepository;
    constructor(jobsRepository: Repository<Job>);
    findAll(): Promise<Job[]>;
    findOne(id: number): Promise<Job>;
}
