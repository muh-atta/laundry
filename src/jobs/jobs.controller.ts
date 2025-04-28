import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  UseGuards 
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from '../entities/job.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('jobs')
@UseGuards(JwtAuthGuard)
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Job> {
    return this.jobsService.findOne(+id);
  }

  @Post()
  async create(@Body() job: Partial<Job>): Promise<Job> {
    return this.jobsService.create(job);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() job: Partial<Job>,
  ): Promise<Job> {
    return this.jobsService.update(+id, job);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.jobsService.remove(+id);
  }
}