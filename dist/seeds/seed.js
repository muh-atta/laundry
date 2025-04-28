"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const userService = app.get(user_service_1.UserService);
    const jwtService = app.get(jwt_1.JwtService);
    const email = 'admin@example.com';
    const plainPassword = 'admin123';
    const existing = await userService.findByEmail(email);
    if (existing) {
        console.log('User already exists:', existing);
        process.exit(0);
    }
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    const user = await userService.create({
        email,
        password: hashedPassword,
        firstName: 'firstName',
        lastName: 'lastName',
        phoneNumber: '',
        city: '',
        state: '',
    });
    const payload = { sub: user.id, email: user.email };
    const token = jwtService.sign(payload);
    console.log('✅ Seeded user:', user);
    console.log('🔐 JWT Token:', token);
    await app.close();
}
bootstrap();
//# sourceMappingURL=seed.js.map