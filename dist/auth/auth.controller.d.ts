import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from '../dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    signup(signupDto: SignupDto): Promise<{
        message: string;
        access_token: string;
    }>;
}
