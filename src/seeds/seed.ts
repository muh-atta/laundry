import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userService = app.get(UserService);
  const jwtService = app.get(JwtService);

  const email = 'admin@example.com';
  const plainPassword = 'admin123';

  // Check if user already exists
  const existing = await userService.findByEmail(email);
  if (existing) {
    console.log('User already exists:', existing);
    process.exit(0);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  // Create user
  const user = await userService.create({
    email,
    password: hashedPassword,
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: '',
    city: '',
    state: '',
    
  });

  // Create JWT token
  const payload = { sub: user.id, email: user.email };
  const token = jwtService.sign(payload);

  console.log('✅ Seeded user:', user);
  console.log('🔐 JWT Token:', token);

  await app.close();
}

bootstrap();
// 🔐 JWT Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDU4Njg2MDQsImV4cCI6MTc0NTg3MjIwNH0.kcJTUU97Mn0PU5vBFw5rhW9ccs_lDuyDOBKiXIvYIn8