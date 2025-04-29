import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  UseGuards,
  Query,
  BadRequestException
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from '../entities/job.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PaginationDto } from '../dto/pagination.dto';

@Controller('jobs')
@UseGuards(JwtAuthGuard)
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

    @Get('paginated')
  async findPaginated(@Query() { page, limit }: PaginationDto) {
    return this.jobsService.findPaginated(page, limit);
  }

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Job> {
    const jobId = parseInt(id);
    if (isNaN(jobId)) {
      throw new BadRequestException('Invalid job ID');
    }
    return this.jobsService.findOne(jobId);
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