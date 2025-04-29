import { Repository } from 'typeorm';
import { Job } from '../entities/job.entity';
export declare class JobsService {
    private jobRepository;
    constructor(jobRepository: Repository<Job>);
    findPaginated(page?: number, limit?: number): Promise<{
        data: Job[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findAll(): Promise<Job[]>;
    findOne(id: number): Promise<Job>;
    create(job: Partial<Job>): Promise<Job>;
    update(id: number, job: Partial<Job>): Promise<Job>;
    remove(id: number): Promise<void>;
}
