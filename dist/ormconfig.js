"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER || 'nestuser',
    password: process.env.DATABASE_PASSWORD || 'nestpass',
    database: process.env.DATABASE_NAME || 'nestdb',
    autoLoadEntities: true,
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map