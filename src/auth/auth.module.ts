import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; // {{ Import TypeOrmModule }}
import { User } from '../entities/user.entity'; // {{ Import User entity }}

@Module({
  // {{ Import TypeOrmModule for the User entity }}
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}