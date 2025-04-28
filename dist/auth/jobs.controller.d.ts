import { JobsService } from './jobs.service';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    findAll(): Promise<import("../entities/job.entity").Job[]>;
    findOne(id: string): Promise<import("../entities/job.entity").Job>;
}
