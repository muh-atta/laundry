import { JobsService } from './jobs.service';
import { Job } from '../entities/job.entity';
import { PaginationDto } from '../dto/pagination.dto';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    findPaginated({ page, limit }: PaginationDto): Promise<{
        data: Job[];
        total: number;
        page: number;
        totalPages: number;
    }>;
    findAll(): Promise<Job[]>;
    findOne(id: string): Promise<Job>;
    create(job: Partial<Job>): Promise<Job>;
    update(id: string, job: Partial<Job>): Promise<Job>;
    remove(id: string): Promise<void>;
}
