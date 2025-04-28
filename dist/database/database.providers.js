"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async (configService) => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            });
            return dataSource.initialize();
        },
        inject: [config_1.ConfigService],
    },
];
//# sourceMappingURL=database.providers.js.map