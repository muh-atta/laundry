export declare class LoginDto {
    email: string;
    password: string;
}
export declare class SignupDto extends LoginDto {
    firstName: string;
    lastName: string;
    city: string;
    state: string;
}
export declare class UserResponseDto {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
}
