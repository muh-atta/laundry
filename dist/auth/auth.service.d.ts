import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { LoginDto, SignupDto } from '../dto/user.dto';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    signup(signupDto: SignupDto): Promise<{
        message: string;
        access_token: string;
    }>;
}
