import { JobsService } from './jobs.service';
import { Job } from '../entities/job.entity';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    findAll(): Promise<Job[]>;
    findOne(id: string): Promise<Job>;
    create(job: Partial<Job>): Promise<Job>;
    update(id: string, job: Partial<Job>): Promise<Job>;
    remove(id: string): Promise<void>;
}
